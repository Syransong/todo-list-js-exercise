function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}

const task1 = newTask("Do The Laundry", "Specifically wash the bedsheets");
const task2 = newTask("Go Grocery Shopping", "Remember to buy bread!");
const tasks = [task1, task2];

task1.lotState(); // the task has not been completed
task1.markCompleted();
task1.logState(); // the task has been completed

console.log(tasks);
