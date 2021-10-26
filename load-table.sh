export TABLE=$1
export DSBULK_PATH=/path/to/dsbulk
export KEYSPACE=telco_billing_ks
export SECURE_BUNDLE_PATH=secure-connect-<database-name>.zip
export USERNAME=<username>
export PASSWORD=<password>

$DSBULK_PATH/dsbulk load \
    -url data/$TABLE.csv \
    -k $KEYSPACE \
    -t $TABLE \
    -b "$SECURE_BUNDLE_PATH" \
    -header true \
    -u $USERNAME \
    -p $PASSWORD