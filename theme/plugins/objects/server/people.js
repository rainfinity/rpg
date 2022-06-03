/**
 *
 * Reldens - People
 *
 * This is an example object class, it extends from the NpcObject class and then define the specific parameters for the
 * behavior and animations.
 * The main point here is that this is just and example, and you could even create several NPCs and make them run any
 * kind of actions at any time. Here you can see a simple message but it could do literally anything.
 *
 */

const { NpcObject } = require('reldens/lib/objects/server/npc-object');

class People extends NpcObject
{

    constructor(props)
    {
        super(props);
        this.runOnAction = true;
        this.playerVisible = true;
        // assign extra params:
        this.clientParams.enabled = true;
        // @TODO - BETA - All the NPC info will be coming from the storage.
        this.clientParams.ui = true;
        this.content = 'Hello! My name is Alfred. Go to the forest and kill some monsters! Now... leave me alone!';
    }

}

module.exports.People = People;
