function gradeQuiz() {
    let score = 0;
  
    // Question 1
    const q1 = document.querySelector('input[name="q1"]:checked');
    if (q1 && q1.value === "a") {
      score++;
    }
  
    // Question 2
    const q2 = document.querySelector('input[name="q2"]:checked');
    if (q2 && q2.value === "b") {
      score++;
    }
  
    // Calculate total score and display results
    const totalQuestions = 2;
    const percentage = (score / totalQuestions) * 100;
    const results = document.getElementById('results');
    results.style.display = 'block';
    document.getElementById('score').innerHTML = `You scored ${score} out of ${totalQuestions}. Percentage: ${percentage.toFixed(2)}%`;
  }
  