const menu = {
    list() {
        return [
    {
        "backMenu":[
        ],
        "frontMenu":[
        ],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    },
    {
        "backMenu":[
			{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"客服聊天",
                        "menuJump":"列表",
                        "tableName":"chat"
                    }
                ],
                "menu":"客服聊天"
            }
			,
			{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"加入的小组",
                        "menuJump":"列表",
                        "tableName":"jiarudexiaozu"
                    }
                ],
                "menu":"加入的小组"
            }
            ,
            {
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"公告信息管理",
                        "menuJump":"列表",
                        "tableName":"news"
                    }
                ],
                "menu":"公告信息"
            }
			,
			{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"兴趣小组",
                        "menuJump":"列表",
                        "tableName":"xingquxiaozu"
                    }
                ],
                "menu":"兴趣小组"
            }
            ,
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"我的小组打卡信息",
                        "menuJump":"列表",
                        "tableName":"xingquxiaozuLiuyan"
                    }
                ],
                "menu":"我的小组打卡信息"
            }
			,
			{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"主题资讯",
                        "menuJump":"列表",
                        "tableName":"zhutizixun"
                    }
                ],
                "menu":"主题资讯"
            }
            ,
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"我的资讯收藏",
                        "menuJump":"列表",
                        "tableName":"zhutizixunCollection"
                    }
                ],
                "menu":"我的资讯收藏"
            }
            ,
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"资讯评论信息",
                        "menuJump":"列表",
                        "tableName":"zhutizixunLiuyan"
                    }
                ],
                "menu":"我的资讯评论信息"
            }
			,
            {
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"错题本",
                        "tableName":"examrewrongquestion"
                    },
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"试卷列表",
                        "tableName":"exampaper"
                    },
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"测试记录",
                        "tableName":"examrecord"
                    }
                ],
                "menu":"测试管理"
            }
        ],
        "frontMenu":[
        ],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"是",
        "hasFrontRegister":"是",
        "roleName":"用户",
        "tableName":"yonghu"
    }
]

	}
}
export default menu;
