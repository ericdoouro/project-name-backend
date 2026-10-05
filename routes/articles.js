const express = require('express');

const {
  getArticles,
  createArticle,
  deleteArticle,
 } = require('../controllers/articles');

const auth = require('../middlewares/auth');

const {
  validateArticle,
  validateArticleId,
 } = require('../middlewares/validation');

const router = express.Router();

router.get('/', auth, getArticles);
router.post('/', auth, validateArticle, createArticle);
router.delete('/:articleId', auth, validateArticleId, deleteArticle);

module.exports = router;
