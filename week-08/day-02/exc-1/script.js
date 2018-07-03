/*<!-- You can work in the html or in a separate js file. Like:
<script>
  On the click of the button,
  Count the items in the list
  And display the result in the result element.
</script>*/

'use strict';

const button = document.querySelector('button');


const sum = () => {
  let items = document.querySelectorAll('li');
  let itemsNumber = items.length;
  document.querySelector('.result').innerHTML = `${itemsNumber} items in the list.`;
};

button.addEventListener('click', sum);
