import Login from '../view/Login.js'
import Showlist from '../view/Showlist.js'
import Detail from '../view/Detail.js'
import Thelist from '../view/Thelist.js'
import Index from '../view/Index.js'
import Error from '../view/Error'

import Home from '../view/index/Home.js'
import Theater from '../view/index/Theater.js'
import Ticket from '../view/index/Ticket.js'
import My from '../view/index/My.js'

export default[
	{
		path:"/login",
		component:Login
	},
	{
		path:"/showlist",
		component:Showlist
	},
	{
		path:"/detail",
		component:Detail
	},
	{
		path:"/thelist",
		component:Thelist
	},
	{
		path:"/error",
		component:Error
	},
	{
		path:"/",
		component:Index,
		childrends:[
			{
				path:"/theater",
				component:Theater
			},
			{
				path:"/ticket",
				component:Ticket
			},
			{
				path:"/my",
				component:My
			},
			{
				path:"/",
				exact:true,
				component:Home
			}
		]
	}
	
]