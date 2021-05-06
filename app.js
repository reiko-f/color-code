// let colorNumber = prompt("Choose number from 0 to 255: ");

// let colorBtn = $('#color-btn')[0];
// colorBtn.addEventListener('click', getColor);
// $('#color-btn')[0].click(function() {
//   $(this).getColor();
// });

$('#color-btn').click(()=> {
  let colorNumber = $('#ask-number')[0].value;

  $.getJSON("https://jonasjacek.github.io/colors/data.json", function(data) {
    // console.log(data);

    let colorName = data[colorNumber].name;    
    let colorCode = data[colorNumber].hexString;

    $("#color-name").append(colorName);
    $("#color-code").append(colorCode);
    $("#color-number").append(colorNumber);
    $("#color-container").css({"background-color": colorCode});
    $("#color-pick").hide();

  });
});
