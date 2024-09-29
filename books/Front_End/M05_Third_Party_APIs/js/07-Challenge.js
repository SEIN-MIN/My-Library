$(document).ready(function () {
    const currentDay = $('#currentDay');
    const timeblocks = $('.timeblocks');
  
    // Display current date
    const today = dayjs().format('dddd, MMMM D');
    currentDay.text(today);
  
    // Business hours
    const hours = Array.from({ length: 9 }, (_, i) => i + 9); // 9 AM to 5 PM
  
    // Create timeblocks
    hours.forEach(hour => {
      const timeblock = $('<div>').addClass('timeblock');
      const time = $('<div>').addClass('time').text(`${hour % 12 || 12}${hour < 12 ? 'AM' : 'PM'}`);
      const input = $('<input>').addClass('input').attr('type', 'text').attr('id', `input-${hour}`);
      const button = $('<button>').html('<i class="fas fa-save"></i>');
  
      timeblock.append(time, input, button);
      timeblocks.append(timeblock);
  
      // Load saved events
      input.val(localStorage.getItem(`event-${hour}`) || '');
  
      // Color code timeblocks
      const currentHour = dayjs().hour();
      if (hour < currentHour) {
        timeblock.addClass('past');
      } else if (hour === currentHour) {
        timeblock.addClass('present');
      } else {
        timeblock.addClass('future');
      }
  
      // Save events
      button.on('click', function () {
        localStorage.setItem(`event-${hour}`, input.val());
      });
    });
  });
  