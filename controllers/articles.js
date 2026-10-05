const Article = require('../models/article');

const getArticles = (req, res, next) => {
  Article.find({ owner: req.user._id })
    .then((articles) => res.status(200).send(articles))

    .catch(next);
};

const deleteArticle = (req, res, next) => {
  Article.findById(req.params.articleId)
    .select('+owner')
    .then((article) => {
      if (!article) {
        return res.status(404).send({ message: 'Artigo não encontrado' });
      }

      if (article.owner.toString() !== req.user._id) {
        return res.status(403).send({
          message: 'Você não pode excluir este artigo',
        });
      }

      return Article.findByIdAndDelete(req.params.articleId)
        .then(() => res.status(200).send({ message: 'Artigo excluído' }));
    })
    .catch(next);
};

const createArticle = (req, res, next) => {
  const {
    keyword,
    title,
    text,
    date,
    source,
    link,
    image,
  } = req.body;

  Article.create({
    keyword,
    title,
    text,
    date,
    source,
    link,
    image,
    owner: req.user._id,
  })
    .then((article) => res.status(201).send(article))
    .catch(next);
};

module.exports = {
  getArticles,
  createArticle,
  deleteArticle,
};
