




  function toggleChatOptions() {
    const chatOptions = document.getElementById('chat-options');
    chatOptions.style.display = chatOptions.style.display === 'block' ? 'none' : 'block';
  }

  function showEventInfo(event) {
    const responseDiv = document.getElementById('chat-response');
    const backToMenu = document.getElementsByClassName('back-to-menu')[0];

    switch (event) {
      case 'Reverse Engineering':
        responseDiv.innerHTML = 'Participants will be given an Encoder.py or Encoder.cpp and they’ll be required to reverse-engineer the file.';
        break;
      case 'BITS':
        responseDiv.innerHTML = 'Get ready for a coding showdown! We\'re excited to invite you to our upcoming competition where your coding skills take center stage.';
        break;
      case 'Error 404':
        responseDiv.innerHTML = 'Error 404 is a debugging event where participants are given codes to debug.';
        break;
      case 'Pitchfork':
        responseDiv.innerHTML = 'Sanketh\'24  brings you the start-up incubation challenge “Pitchfork” to channel your thoughts and ideas translate to entrepreneurial ventures.';
        break;
      case 'Devcraft':
        responseDiv.innerHTML = '“Techies, Rally!” HackerWorld SDEC proudly presents  DevCraft, a  development contest that pushes the boundaries of innovation and creativity.';
        break;
      case 'Techloop':
        responseDiv.innerHTML = 'TechLoop is a Kahoot-based quiz competition where students will be tested on their aptitude and other tech-related knowledge.';
        break;
      case 'Workshop':
        responseDiv.innerHTML = 'Are you fascinated by the intersection of creativity and technology? Do you want to explore the exciting world of Generative Artificial Intelligence (AI)?';
        break;
      case 'Project Exhibition':
        responseDiv.innerHTML = 'We are thrilled to invite you to the upcoming Projects Exhibition at Sanketh: The Techfest of Sunderdeep Engineering College.';
        break;
      case 'Treasure Hunt':
        responseDiv.innerHTML = 'Are you ready to embark on an exhilarating adventure filled with riddles, clues, and hidden secrets?';
        break;
      case 'Timestamp':
        responseDiv.innerHTML = 'Are you ready to sprint against time, unravel algorithms, and code your way to victory?';
        break;
      default:
        responseDiv.innerHTML = 'Sorry, I couldn\'t find information about that event.';
    }

    responseDiv.style.display = 'block';
    backToMenu.style.display = 'block';
    toggleChatOptions();
  }

  function showContactInfo() {
    const responseDiv = document.getElementById('chat-response');
    const backToMenu = document.getElementsByClassName('back-to-menu')[0];
    const chatOptions = document.getElementById('chat-options');

    responseDiv.innerHTML = 'Contact Person Name: Gyan Prakash Pandey<br>Sunder Deep Engineering College<br>Phone: +91 9835066985<br>Email: codingclub@sunderdeep.ac.in';
    responseDiv.style.display = 'block';
    backToMenu.style.display = 'block';
    chatOptions.style.display = 'none';
  }

  function backToMainMenu() {
    const responseDiv = document.getElementById('chat-response');
    const backToMenu = document.getElementsByClassName('back-to-menu')[0];
    const chatOptions = document.getElementById('chat-options');

    responseDiv.style.display = 'none';
    backToMenu.style.display = 'none';
    chatOptions.style.display = 'block';
  }
