package taskmanager.project.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "task")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "task")
    private String task;
}
