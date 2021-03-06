PhraseData = function() {
    this.phrases = {};
    this.buildPhrases();
};

PhraseData.prototype.getPhrase = function(id) {
    console.log("Getting Phrase")
    return this.phrases[id];
};

PhraseData.prototype.buildPhrases = function() {
    this.phrases[music.ENUMS.phrases.intro] = {
        lead:[[[0,2], [0,2], [2,2], [3,2]],[[2,2], [4,2], [0,3], [1,3]],[[3,2], [3,2], [4,2], [5,2]],[[4,2], [5,2], [0,3], [3,2]]],
        keys:[[[0,1], [0,1], [0,1], [6,0]],[[0,1], [2,1], [5,0], [6,0]],[[0,1], [2,1], [6,0], [5,0]],[[0,1], [5,0], [3,1], [6,0]]],
        mode:[[0,      0,     0,     0   ],[0,      0,     0,     0   ],[2,      0,     0,     1   ],[0,      0,     0,     3   ]]
    };

    this.phrases[music.ENUMS.phrases.posci] = {
        lead:[[[0,2], [3,2], [6,1], [2,2]],[[5,1], [1,2], [4,1], [1,2]],[[5,1], [2,2], [4,2], [6,1]],[[0,2], [5,1], [2,2], [4,2]]],
        keys:[[[0,1], [3,1], [6,0], [2,1]],[[5,0], [1,1], [4,0], [4,0]],[[5,0], [2,1], [4,0], [6,0]],[[0,1], [5,0], [2,1], [6,0]]],
        mode:[[    0,     0,     0,     0],[    0,     0,     0,     3],[    0,     0,     2,     3],[    0,     0,     0,    2 ]]
    };

    this.phrases[music.ENUMS.phrases.majHarm] = {
        lead:[[[0,2], [5,1], [1,2], [2,2]],[[5,1], [4,1], [5,1], [0,2]],[[2,2], [3,2], [5,2], [6,1]],[[3,1], [4,1], [5,1], [4,1]]],
        keys:[[[0,1], [5,0], [6,0], [4,0]],[[3,0], [4,0], [5,0], [0,1]],[[2,1], [5,0], [3,0], [6,0]],[[5,0], [0,1], [3,0], [6,0]]],
        mode:[[    0,     1,     0,    1 ],[    1,     1,     1,     2],[    0,     1,     2,     3],[    2,     2,     1,    2 ]]
    };

    this.phrases[music.ENUMS.phrases.little] = {
        lead:[[[0,2], [5,1], [4,1], [4,1]],[[0,2], [5,1], [4,1], [4,1]],[[0,2], [5,1], [5,1], [4,1]],[[0,2], [5,1], [2,2], [6,1]]],
        keys:[[[0,1], [5,0], [4,0], [4,0]],[[0,1], [5,0], [4,0], [4,0]],[[0,1], [5,0], [3,0], [4,0]],[[0,1], [5,0], [2,1], [6,0]]],
        mode:[[    2,     2,     2,    2 ],[    2,     2,     2,    2 ],[    2,     2,     2,    2 ],[    2,     0,     0,    0 ]]
    };

    this.phrases[music.ENUMS.phrases.shifts] = {
        lead:[[[0,0], [0,0], [0,0], [0,0]],[[0,0], [0,0], [0,0], [0,0]],[[0,0], [0,0], [0,0], [0,0]],[[0,0], [0,0], [0,0], [0,0]]],
        keys:[[[0,1], [0,1], [0,1], [6,0]],[[0,1], [2,1], [5,0], [6,0]],[[0,1], [2,1], [6,0], [5,0]],[[0,1], [5,0], [3,1], [6,0]]],
        mode:[[0,      0,     0,     0   ],[0,      0,     0,     0   ],[2,      0,     0,     1   ],[0,      0,     0,     3   ]]
    };
    this.phrases[music.ENUMS.phrases.Hero] = {
        lead:[[[2,2], [2,2], [2,2], [3,2]],[[4,2], [5,2], [6,2], [6,2]],[[3,2], [5,2], [3,2], [6,2]],[[4,2], [5,2], [0,3], [6,2]]],
        keys:[[[0,1], [5,0], [6,0], [6,0]],[[0,1], [5,0], [2,1], [6,0]],[[0,1], [5,0], [6,0], [6,0]],[[0,1], [5,0], [3,1], [6,0]]],
        mode:[[0,      0,     0,     0   ],[0,      0,     0,     0   ],[0,      0,     0,     0   ],[0,      0,     0,     0   ]]
    };
    this.phrases[music.ENUMS.phrases.indo] = {
        lead:[[[0,1], [0,1], [2,1], [3,1]],[[0,2], [2,2], [3,2], [4,2]],[[0,1], [0,1], [5,0], [6,0]],[[0,2], [6,1], [3,2], [4,2]]],
        keys:[[[0,1], [0,1], [0,1], [6,0]],[[0,1], [0,1], [0,1], [2,1]],[[0,1], [0,1], [5,0], [6,0]],[[0,1], [6,0], [3,1], [4,1]]],
        mode:[[0,      0,     0,     0   ],[0,      0,     0,     0   ],[0,      0,     0,     0   ],[0,      0,     0,     0   ]]
    };

};


