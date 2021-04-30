export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = 'data-outside';

  function handleOutsideClick(event) {
    console.log(event.target)
    if(!element.contains(event.target)) {
      events.forEach(userEvent => {
        html.removeEventListener(userEvent, handleOutsideClick)
      })
      element.removeAttribute(outside);
      callback();
    }
  }

  if(!element.hasAttribute(outside)) {
    events.forEach(userEvent => {
      html.addEventListener(userEvent, handleOutsideClick);
    })
    
    element.setAttribute(outside, '');
  }
  
}