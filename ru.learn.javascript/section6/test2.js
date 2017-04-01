/**
 * Created by admin on 01.04.2017.
 */

var leader = {
    id: 12,
    name: "Василий Иванович"
};

var soldier = {
    id: 51,
    name: "Петька"
};

// ID instead of cycle references
leader.soldierId = 51;
soldier.leaderId = 12;

var team = {
    12: leader,
    51: soldier
};