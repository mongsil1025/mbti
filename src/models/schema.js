export const schema = {
    "models": {
        "Description": {
            "name": "Description",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "mbti": {
                    "name": "mbti",
                    "isArray": false,
                    "type": {
                        "enum": "MbtiEnum"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "data": {
                    "name": "data",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "display_name": {
                    "name": "display_name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Descriptions",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Mbti": {
            "name": "Mbti",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "energy": {
                    "name": "energy",
                    "isArray": false,
                    "type": {
                        "enum": "Energy"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "recognition": {
                    "name": "recognition",
                    "isArray": false,
                    "type": {
                        "enum": "Recognition"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "decision": {
                    "name": "decision",
                    "isArray": false,
                    "type": {
                        "enum": "Decision"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "life_pattern": {
                    "name": "life_pattern",
                    "isArray": false,
                    "type": {
                        "enum": "LifePattern"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "full_text": {
                    "name": "full_text",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Mbtis",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {
        "MbtiEnum": {
            "name": "MbtiEnum",
            "values": [
                "ISTJ",
                "ISTP",
                "INFJ",
                "INTJ",
                "ISFJ",
                "ISFP",
                "INFP",
                "INTP",
                "ESTJ",
                "ESFP",
                "ENFP",
                "ENTP",
                "ESFJ",
                "ESTP",
                "ENFJ",
                "ENTJ"
            ]
        },
        "LifePattern": {
            "name": "LifePattern",
            "values": [
                "J",
                "P"
            ]
        },
        "Decision": {
            "name": "Decision",
            "values": [
                "T",
                "F"
            ]
        },
        "Recognition": {
            "name": "Recognition",
            "values": [
                "N",
                "S"
            ]
        },
        "Energy": {
            "name": "Energy",
            "values": [
                "E",
                "I"
            ]
        }
    },
    "nonModels": {},
    "codegenVersion": "3.3.1",
    "version": "6c8df8be019a247268d5c1a05aea5751"
};