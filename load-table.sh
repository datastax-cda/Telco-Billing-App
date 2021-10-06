export TABLE=$1
export DSBULK_PATH=/Users/jamescolvin/Downloads/dsbulk-1.8.0/bin
export KEYSPACE=telco_billing_ks
export SECURE_BUNDLE_PATH=/Users/jamescolvin/Downloads/secure-connect-astra.zip
export USERNAME=cacZvhkTXnglcnvWmOWjUHoN
export PASSWORD=YSJQDq7z3N3caemaW9wy+ple1HBd6SY9tHLFOe0AQ0XANm357mD3O8U5Ygx4Kk.LL7UdsZIff+u,pWUOpDX6ADtIB5oai9HPal_Mdf5omiLvOulgaKouAWTD,2BpSr_L

$DSBULK_PATH/dsbulk load \
    -url data/$TABLE.csv \
    -k $KEYSPACE \
    -t $TABLE \
    -b "$SECURE_BUNDLE_PATH" \
    -header true \
    -u $USERNAME \
    -p $PASSWORD
