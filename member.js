function skillsMember() {
    return {
        restrict: `E`,
        templateUrl: `modules/skills/vies/member.html`,
        controller: `SkillsMemberController`,
        controllerAs: `vm`,
        bindToController: true,
        scope: {
            member: '='
        }
    };
}