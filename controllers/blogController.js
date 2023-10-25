const blogModel = require("../models/blogModel");

exports.getAllBlogController = async (req, res) => {
    try {
        const blog = await blogModel.find({})
        if (! blog) {
            return res.status(200).send({
                message: 'no blog found',
                success: false
            })
        }
        return res.status(200).send({
            message: 'All of the blog',
            success: true,
            blogcount: blog.length,
            blog
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: 'Problem in controllers',
            success: false,
            error
        })
    }
}

//
exports.createBlogController = async (req, res) => {
    try {
        const {
            title,
            descryption,
            image
        } = req.body
        if (!title || !descryption || !image) {
            return res.status(400).send({
                message: 'please fill all fields',
                success: false
            })
        }
        const newBlog = new blogModel({
            title,
            descryption,
            image
        })
        await newBlog.save()
        return res.status(200).send({
            message: 'New Blog Created',
            success: true,
            newBlog
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: 'Problem in controllers',
            success: false,
            error
        })
    }
}

exports.getBlogByIdController = async (req, res) => {
    try {
        const {
            id
        } = req.params
        const blog = await blogModel.findById(id)
        if (! blog) {
            return res.status(400).send({
                message: "Blog not found",
                success: false
            })
        }
        return res.status(200).send({
            message: 'blog',
            success: true,
            blog
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: 'Problem in controllers',
            success: false,
            error
        })
    }
}

exports.updateBlogController = async (req, res) => {
    try {
        const {
            id
        } = req.params
        const {
            title,
            descryption,
            image
        } = req.body
        const blog = await blogModel.findByIdAndUpdate(id, {
            ...req.body
        }, {
            new: true
        })
        return res.status(200).send({
            message: "Blog updated",
            success: true,
            blog
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: 'Problem in controllers',
            success: false,
            error
        })
    }
}

exports.deleteBlogController = async (req, res) => {
    try {
        const {
            id
        } = req.params
        const blog = await blogModel.findByIdAndDelete(id)
        if (! blog) {
            return res.status(400).send({
                message: 'blog not found',
                success: false
            })
        }
        return res.status(200).send({
            message: 'blog has been deleted',
            success: true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: 'Problem in controllers',
            success: false,
            error
        })
    }
}
