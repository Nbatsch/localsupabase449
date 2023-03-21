import {
    createClient
} from "https://cdn.skypack.dev/@supabase/supabase-js@2.11.0"

const supabaseUrl = 'https://lbbriaijfeimtqzsuzww.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxiYnJpYWlqZmVpbXRxenN1end3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg4NTAwNDYsImV4cCI6MTk5NDQyNjA0Nn0.CdqCxEb-PONqD64J6HHWgH_DOAaK0Eo-xukk4xCc0BE'
const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks() {
    let {
        data: Books,
        error
    } = await supabase
        .from('Books')
        .select('*')

    for (let book of Books) {
        let bookList = document.getElementById('books');
        bookList.innerHTML += `<tr><td>${book.title}</td><td>${book.author}</td><td>${book.isbn}</td><td>${book.description}</td></tr>`;
    }
}

getBooks();