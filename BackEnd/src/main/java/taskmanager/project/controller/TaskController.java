package taskmanager.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import taskmanager.project.requestmodules.AddTaskRequest;
import taskmanager.project.service.TaskService;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("api/tasks")
public class TaskController {
    private TaskService taskService;

    @Autowired
    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @DeleteMapping("/delete")
    public void deleteTask(@RequestParam(name = "taskId") Long id){
        taskService.deleteTaskById(id);
    }

    @PostMapping("/add/task")
    public void postTask(@RequestBody AddTaskRequest addTaskRequest){
        taskService.postTask(addTaskRequest);
    }
}
