// this is import some function from arother files to excute or bundil in dist file
import { urlValidiation } from './js/urlChecker'
import { handleSubmit } from './js/formHandler'

console.log(urlValidiation);
// this is import to styles files
import './styles/base.scss'
import './styles/footer.scss'
import './styles/header.scss'
import './styles/form.scss'
import './styles/resets.scss'


alert(" this is a site to fetch api from any url")
console.log(" all is fine ");
// here i export some function to enable import its in any files
export {
    urlValidiation,
    handleSubmit
}