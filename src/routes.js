import ShowBlogs from './components/ShowBlog'
import AddBlog from './components/AddBlog'
import SingleBlog from './components/SingleBlog'

export default[
    {path:'/', component:ShowBlogs},
    {path:'/addBlog', component:AddBlog},
    {path:'blog/:id',component:SingleBlog}
]