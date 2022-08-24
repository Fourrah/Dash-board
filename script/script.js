const { post } = require("jquery")

const getAllPost = async (req, res) => {
    try {
        const posts = await post.find({});
        res.status(200).render('board', {posts});
    } catch (error) {
        res.status(400).send({error: error.message});
    }
};

const getWrite = (req, res) => {
    try {
      res.status(200).render('write');
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  };
  
  const postWrite = async (req, res) => {
    try {
      const {
        body: { title, writer, contents  },
      } = req;
      const post = await Post.create({
        title,
        writer,
        contents,
      });
      res.redirect(`/main.html/${post._id}`);
      // 게시글을 작성한 뒤, 해당 게시글의 상세 페이지로 이동
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  };