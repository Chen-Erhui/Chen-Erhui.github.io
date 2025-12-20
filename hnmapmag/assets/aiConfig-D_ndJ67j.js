let e={welcomeMessage:{enabled:!0,content:`您好！我是豫建先锋-AI助手，专门为您提供河南省党建教育培训基地的咨询服务。

我可以帮助您：
• 🏛️ 查询培训基地信息
• 🗺️ 制定学习路线规划
• 📅 创建研学活动方案
• 📞 协助预约和通知

请问您需要什么帮助？`},quickActions:{createActivity:{enabled:!0,label:"创建研学活动"},routeConsult:{enabled:!0,label:"路线咨询"}},activityCreation:{step1:{enabled:!0,label:"活动主题",allowSkip:!0,defaultValue:"党员教育培训活动",placeholder:"请输入研学活动主题"},step2:{enabled:!0,label:"活动开始时间",allowSkip:!1},step3:{enabled:!0,label:"培训基地选择",allowSkip:!0,allowRandom:!0,availableBases:[]},step4:{enabled:!0,label:"参与人数",defaultValue:30,min:1,max:2e3},step5:{enabled:!0,label:"路线规划调整",allowAdjust:!0,allowOneClickReservation:!0},step6:{enabled:!0,label:"一键通知",allowNotification:!0}},reservationConfig:{baseSelection:{enabled:!0,required:!0,label:"选择培训基地"},reservationDate:{enabled:!0,required:!0,label:"预约日期"},participantCount:{enabled:!0,required:!0,label:"参与人数",defaultValue:30},contactPerson:{enabled:!0,required:!0,label:"联系人",maxLength:20},contactPhone:{enabled:!0,required:!0,label:"联系电话",pattern:"^1[3-9]\\d{9}$"},remark:{enabled:!0,required:!1,label:"备注",maxLength:200}},modelConfig:{provider:"deepseek",model:"deepseek-chat",useReasoning:!1,temperature:.7,maxTokens:2e3,apiKey:"sk-xxxxxxxxxxxxxxxxxxxxxxxx",apiUrl:"https://api.deepseek.com/v1/chat/completions",systemPrompt:`你是豫建先锋AI助手，专门为河南省党员教育培训基地提供咨询服务。

你的职责：
1. 回答关于河南省各培训基地的信息查询
2. 协助用户制定学习路线规划
3. 帮助创建研学活动方案
4. 提供预约和通知服务

注意事项：
- 保持专业、友好的服务态度
- 回答要准确、简洁
- 基于系统内已有的基地数据进行推荐
- 引导用户使用系统功能完成操作`}};const r={handle(a,t,l){return a==="/configs/ai"&&t==="GET"?{code:0,message:"获取成功",data:e}:a==="/configs/ai"&&t==="PUT"?(e={...e,...l},{code:0,message:"保存成功",data:e}):{code:404,message:"接口不存在"}}};export{r as default};
