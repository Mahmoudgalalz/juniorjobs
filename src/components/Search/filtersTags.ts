import { filterJobs, paging } from "@components/Job/jobComponent";

const tags:string[] = [
    'Backend',
    'Frontend',
    'Software Engineer',
    'FullStack',
    'DevOps',
    'Android Developer',
    'Flutter',
    'Mobile Developer'
];

const level:string[] = ['Internship','EntryLevel'];

function createElements(){
    const searchtags = document.querySelector('#search-tags');
    tags.forEach(tag=>{
        searchtags.innerHTML += `<button id='tags' class="p-2 border-2 border-primary rounded-xl hover:bg-primary hover:text-white duration-150">${tag}</button>`
    })
}
createElements();

const btns = document.querySelectorAll('#tags');
btns.forEach(btn=>{
    btn.addEventListener('click', (e)=>{
        filterJobs(btn.textContent);
        btns.forEach(bb=>{
            if(bb.classList.contains('bg-primary')){
                bb.classList.remove('bg-primary')
            }
        })
        btn.classList.add('bg-primary')
    });
})

