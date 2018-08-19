Vue.component('navbars',{
    template : `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Todo</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
            <a class="nav-link" href="#"> <i class="fas fa-user"></i> {{name}} <span class="sr-only">(current)</span></a>
            </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
        <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
        <a class="nav-link" href="#" data-toggle="modal" data-target="#exampleModal">Add Task <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item active">
        <a class="nav-link" href="#" onclick="logout()">Log Out</a>
        </li>
    </ul>
        </form>
        </div>
    </nav>
    `,
    data(){
        return{
            name :''
        }
    },
    methods : {
        getName(){
            let name =localStorage.getItem('name')
            this.name = name
         }
    },
    mounted(){
        this.getName()
    }
})