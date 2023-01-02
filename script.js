const filter = document.querySelector('.filter');

const clearBtn = document.querySelector('.clear-btn');
const clearTag = document.querySelector('tag-del-btn');


const addToFilter = document.querySelector('.filtered');

document.querySelectorAll('.job-tag').forEach(item => {
    item.addEventListener('click', event => {
        filter.classList.remove('hidden');
        
        const filterHTMLElement = `
   
            <div class="tag">
                <div class="filtered-tags">Frontend</div>
                <div class="tag-del-btn">X</div>
            </div>
        
        `;

        
        addToFilter.innerHTML = filterHTMLElement;
        console.log('clicked');

    });
  });


clearBtn.addEventListener('click', ()=> {
    console.log('cleared');
    filter.classList.add('hidden');
  
        const filterHTMLElement = `
        
        `;  


    addToFilter.innerHTML = filterHTMLElement;
});

if(clearTag)
clearTag.addEventListener('click', ()=> {
    filter.classList.add('hidden');
    console.log('tag deleted');
});


