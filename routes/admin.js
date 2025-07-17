const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const Skill = require('../models/Skill');

router.get('/', async (req, res) => {
  const projects = await Project.find();
  const skills = await Skill.find();
  res.render('index', { projects, skills });
});

router.get('/add-project', (req, res) => {
  res.render('add_project');
});

router.post('/add-project', async (req, res) => {
  await Project.create(req.body);
  res.redirect('/admin');
});

router.get('/add-skill', (req, res) => {
  res.render('add_skill');
});

router.post('/add-skill', async (req, res) => {
  await Skill.create(req.body);
  res.redirect('/admin');
});

router.get('/delete-project/:id', async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.redirect('/admin');
});

router.get('/delete-skill/:id', async (req, res) => {
  await Skill.findByIdAndDelete(req.params.id);
  res.redirect('/admin');
});

module.exports = router;
