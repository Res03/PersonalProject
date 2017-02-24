namespace FitnessForumProject.Controllers {
    var subId;
    export class HomeController {
        public message = 'Hello from the home page!';
    }

    export class TopicsController {

        public topic;
        public topics;
        public resource = "api/forum/";
        public user;
        public username;
        public userId;
        constructor(private $http: ng.IHttpService, private $stateParams: ng.ui.IStateParamsService, private $state: ng.ui.IStateService, private accountService: FitnessForumProject.Services.AccountService)
        {
            this.$http.get(this.resource).then((response) => {
                this.topics = response.data
            });
            this.username = this.getUser();
        }

        public addTopic(topic)
        {
            return this.$http.post(this.resource, topic).then((response) => {
                this.$state.go("topics")
            });
        }

        public getUser() {
            this.user = this.accountService.getUserName();
        }

    }

    export class AddTopicController {

        public topic;
        public resource = "api/forum/";
        
       
        constructor(private $http: ng.IHttpService, private $state: ng.ui.IStateService, private $stateParams: ng.ui.IStateParamsService)
        {
            
        }

        public addTopic() {
            this.$http.post(this.resource, this.topic).then((response) => {
                this.$state.go("topics")
            });
        }

      
    }

    export class SubTopicsController {

        public subtopics;
        public resource = "/api/forum/";
        public subtopicid;
        public resourceSubId = "api/forum/subtopic/";
        constructor(private $http: ng.IHttpService, private $stateParams: ng.ui.IStateParamsService)
        {
            subId = this.$stateParams["id"];
            this.$http.get(this.resource + this.$stateParams["id"]).then((response) => {
                this.subtopics = response.data
            });

            //this.$http.get(this.resourceSubId + this.$stateParams["id"]).then((response) => {
            //    this.subtopicid = response.data
                
            //});
            
        }
        
    }

    export class AddSubTopicController {
        public subtopic;
        public resource = "/api/forum/addsubtopic";
        public resourceId = "api/forum/";
        public subtopId;
        public user;

        constructor(private $http: ng.IHttpService, private $stateParams: ng.ui.IStateParamsService, private $state: ng.ui.IStateService, private accountService: FitnessForumProject.Services.AccountService, private $window: ng.IWindowService)
        {
            
            sessionStorage.setItem("id", subId);
            this.subtopId = sessionStorage.getItem("id");
        }

        public addSubTopic() {
            this.$http.post(this.resource, {subtopic: this.subtopic, id: this.subtopId}).then((response) => {
                this.$state.go("subtopics")
            });
        }

        public getUser() {
            this.user = this.accountService.getUserName();
            console.log(this.user);
        }
    }

    export class CommentsController {

        public comments;
        public resource = "/api/forum/comments/";

        constructor(private $http: ng.IHttpService, private $stateParams: ng.ui.IStateParamsService)
        {
            this.$http.get(this.resource + this.$stateParams["id"]).then((response) => {
                this.comments = response.data
            });
        }
    }
    export class SecretController {
        public secrets;

        constructor($http: ng.IHttpService) {
            $http.get('/api/secrets').then((results) => {
                this.secrets = results.data;
            });
        }
    }


    export class AboutController {
        public message = 'Hello from the about page!';
    }

}
