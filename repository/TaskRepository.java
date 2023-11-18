package taskmanager.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import taskmanager.project.entity.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {
}
