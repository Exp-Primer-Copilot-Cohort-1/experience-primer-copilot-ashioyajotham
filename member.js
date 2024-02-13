function skillsMember(){
    return {
        restrict: 'E',
        templateUrl: 'module/skills/views/member.html',
        controllerAs: 'vm',
        bindToController: true,
        scope:{
            member: '='
        }
    };
        }