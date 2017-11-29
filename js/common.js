	var serverIp = "120.203.214.69";
    var serverPort = "8081";
    var serverName = "/azbjWebApp/";
    var serverURL = "http://" + serverIp + ":" + serverPort + serverName;
    //帮教表现
    var bjbx = [{'code':'01','text':'入党团'},
                {'code':'02','text':'担任领导职务'},
                {'code':'03','text':'受党政机关表彰'}
            ];
    // 是否
    var choose = [{'code':'01','text':'是'},
                     {'code':'02','text':'否'}
                  ];
    //安置方式
    var azqk = [{'code':'01','text':'落实责任田'},
                   {'code':'02','text':'公益性岗位安置'},
                   {'code':'03','text':'自主创业'},
                   {'code':'04','text':'从事个体经营'},
                   {'code':'05','text':'企业和经济实体吸纳就业'},
                   {'code':'06','text':'其他安置方式'}
    			];
    /**
     * 就业技能
     */
    var jyjn = {one:'有技术',two:'无技术'};			
    /**
     * 就业培训
     */
    var jypx = {zero:'未参加',one:'已参加'};	
    /**
     * 1 : 是  0 : 否
     */
    var flag = {zero:'否',one:'是'};
    //社会救济
    var azshjj = [{'code':'01','text':'落实最低生活保障'},
                   {'code':'02','text':'落实特困人员供养'},
                   {'code':'03','text':'落实医疗救助'},
                   {'code':'03','text':'落实教育救助'},
                   {'code':'03','text':'落实住房救助'},
                   {'code':'03','text':'其他'}
                 ];
    //就业服务
    var jyfw = [{'code':'01','text':'失业登记'},
                     {'code':'02','text':'技能培训'},
                     {'code':'03','text':'推荐就业'}
                  ];
    //var href = window.location.href;
	//window.ServerURL = window.location.href.substring(0, href.indexOf("azbj")) + "azbj/";
	/*window.ImgURL = '/azbj/webClient/upload/';
    window.error = function(type){
    	switch (type){
	    	case 0:
	    		return "操作成功";
	    		break;
	    	case -2:
	    		return "操作失败";
	    		break;
	    	case -7:
	    		return "参数错误";
	    		break;
	    	case -9:
	    		return "数据库异常";
	    		break;
	    	case -10:
	    		return "数据已存在";
	    		break;
    	}
    };
    
    window.preTwoNum = "64";//前两位
    
    window.numTwo = '00';
    
    window.provinceNum = "640000";//省的六位编码
    
    window.deptType={//view_jg里面的类别
    		sqjz:"2",
    		kss:"3",
    		prison:"1",
    		justice:"0"
    };

    window.helpAstateArr = [
                          {'astate':'0','state':'未衔接'},
                          {'astate':'1','state':'已衔接'},
                          {'astate':'2','state':'已帮教'},
                          {'astate':'3','state':'已安置'}
                 ];
    window.helpAstateArray = [
							{'astate':0,'state':'未衔接'},
							{'astate':1,'state':'已衔接'},
							{'astate':2,'state':'已帮教'},
							{'astate':3,'state':'已安置'},
							{'astate':11,'state':'未帮教'},
							{'astate':21,'state':'未安置'}
                 ];
    window.areaArr = [
                      		{'code':'6401','area':'银川市'},
                            {'code':'6402','area':'石嘴山市'},
                            {'code':'6403','area':'吴忠市'},
                            {'code':'6404','area':'固原市'},
                            {'code':'6405','area':'中卫市'}
                   ];
    window.countyArr0 = [
							{'code':'640104','area':'兴庆区'},
							{'code':'640105','area':'西夏区'},
							{'code':'640106','area':'金凤区'},
							{'code':'640121','area':'永宁县'},
							{'code':'640122','area':'贺兰县'},
							{'code':'640181','area':'灵武市'}
                   ];
    window.countyArr1 = [
							{'code':'640202','area':'大武口区'},
							{'code':'640205','area':'惠农区'},
							{'code':'640221','area':'平罗县'}
                ];
    window.countyArr2 = [
							{'code':'640302','area':'利通区'},
							{'code':'640303','area':'红寺堡区'},
							{'code':'640323','area':'盐池县'},
							{'code':'640324','area':'同心县'},
							{'code':'640381','area':'青铜峡市'}
                ];
    window.countyArr3 = [
							{'code':'640402','area':'原州区'},
							{'code':'640422','area':'西吉县'},
							{'code':'640423','area':'隆德县'},
							{'code':'640424','area':'泾源县'},
							{'code':'640425','area':'彭阳县'}
             ];
    window.countyArr4 = [
							{'code':'640502','area':'沙坡头区'},
							{'code':'640521','area':'中宁县'},
							{'code':'640522','area':'海原县'}
             ];
    
    //监狱罪犯核查
    window.prisonCrimeArr = [
                          {'number':'0','reviewed':'未核查'},
                          {'number':'1','reviewed':'已核查'},
                   ];
    //4 :代表乡镇
    window.country = 4;
    
    //名族下拉选
    window.MZ= [
              "汉族", "壮族", "满族", "回族", "苗族", "维吾尔族", "土家族", "彝族", "蒙古族", "藏族", "布依族", "侗族", "瑶族", "朝鲜族", "白族", "哈尼族",
              "哈萨克族", "黎族", "傣族", "畲族", "傈僳族", "仡佬族", "东乡族", "高山族", "拉祜族", "水族", "佤族", "纳西族", "羌族", "土族", "仫佬族", "锡伯族",
              "柯尔克孜族", "达斡尔族", "景颇族", "毛南族", "撒拉族", "布朗族", "塔吉克族", "阿昌族", "普米族", "鄂温克族", "怒族", "京族", "基诺族", "德昂族", "保安族",
              "俄罗斯族", "裕固族", "乌孜别克族", "门巴族", "鄂伦春族", "独龙族", "塔塔尔族", "赫哲族", "珞巴族"
              ];
    */
    /**
     * 帮教状态  0：未衔接   1：已衔接  2：未安置    3：已安置   -3:未交接
     */
    /*window.bjState = {'WaitJoin':"0",'waitHelpEdu':"1",'waitInstall':"2",'alreadyInstall':"3",'noHand':"-3"};*/
