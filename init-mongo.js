db.createUser(
    {
        user:"carlos",
        pwd:"1234567890",
        roles:[{
            role:"readWrite",
            db:"Database"
        }]
    }
)