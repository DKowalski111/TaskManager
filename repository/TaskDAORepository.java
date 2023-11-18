package taskmanager.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import taskmanager.project.entity.Task;

interface TaskDAORepository extends JpaRepository<Task, Long> {
}
