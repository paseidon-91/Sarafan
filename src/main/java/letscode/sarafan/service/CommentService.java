package letscode.sarafan.service;

import letscode.sarafan.domain.Comment;
import letscode.sarafan.domain.User;
import letscode.sarafan.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CommentService {
    private final CommentRepository commentRepository;

    @Autowired
    public CommentService(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    public Comment create(Comment comment, User user) {
        comment.setAuthor(user);
        commentRepository.save(comment);

        return comment;
    }
}
