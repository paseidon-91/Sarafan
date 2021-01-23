package letscode.sarafan.repository;

import letscode.sarafan.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDetailRepository extends JpaRepository<User, String> {

}
