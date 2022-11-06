export const schema = {
    "models": {
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
    "version": "926a0786ad0e51a416a7c44b70af2f92"
};