const display_url = 0;
const ie5menuElement = document.querySelector('#ie5menu');

function showmenuie5(event) {
  const rightedge = document.body.clientWidth - event.clientX;
  const bottomedge = document.body.clientHeight - event.clientY;
  const unitOfMeasurement = 'px';

  let leftWidth;

  if (rightedge < ie5menuElement.offsetWidth) {
    leftWidth =
      document.body.scrollLeft + event.clientX - ie5menuElement.offsetWidth;
  } else {
    leftWidth = document.body.scrollLeft + event.clientX;
  }

  leftWidth += unitOfMeasurement;
  ie5menuElement.style.left = leftWidth;

  let topWidth;

  if (bottomedge < ie5menuElement.offsetHeight) {
    topWidth =
      document.body.scrollTop + event.clientY - ie5menuElement.offsetHeight;
  } else {
    topWidth = document.body.scrollTop + event.clientY;
  }

  topWidth += unitOfMeasurement;
  ie5menuElement.style.top = topWidth;

  ie5menuElement.style.visibility = 'visible';
  return false;
}

function hidemenuie5() {
  ie5menuElement.style.visibility = 'hidden';
}

function highlightie5(event) {
  if (event.target.className == 'menuitems') {
    event.target.style.backgroundColor = '';

    // cor ao passar o mouse

    event.target.style.color = '#000000';
    if (display_url == 1) window.status = event.target.url;
  }
}

function lowlightie5(event) {
  if (event.target.className == 'menuitems') {
    event.target.style.backgroundColor = '';
    event.target.style.color = '#FFFFFF';
    window.status = '';
  }
}

function jumptoie5(event) {
  if (event.target.className == 'menuitems') {
    window.location = event.target.url;
  }
}

document.addEventListener('contextmenu', showmenuie5);
document.body.addEventListener('click', hidemenuie5);

ie5menuElement.addEventListener('click', jumptoie5);
ie5menuElement.addEventListener('mouseout', lowlightie5);
ie5menuElement.addEventListener('mouseover', highlightie5);
