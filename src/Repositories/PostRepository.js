'use strict'

const Post = require('../Models/post');

const PostRepository = {};

PostRepository.getAll = async function () {
  try
  {
    var posts = await Post.find();
    return {posts};
  }
  catch (error)
  {
    return {error};
  }
};

PostRepository.byId = async function (id) {
  try
  {
    var post = await Post.findById(id);

    post.__v = undefined;

    return {post};
  }
  catch (error)
  {
    return {error};
  }
};

PostRepository.create = async function (data) {
  try
  {
    var post = data.save();
    return {post}
  }
  catch (error)
  {
    return {error};
  }
};

PostRepository.update = async function (id = null, data) {
  try
  {
    var post = await Post.findByIdAndUpdate(id , data, {new:true});
    return {post};
  }
  catch (error)
  {
    return {error};
  }
};

PostRepository.delete = async function (id) {
  try
  {
    var post = await Post.findByIdAndDelete(id);
    return {post};
  }
  catch (error)
  {
    return {error};
  }
};

module.exports = PostRepository;
