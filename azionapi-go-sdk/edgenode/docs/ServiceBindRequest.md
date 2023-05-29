# ServiceBindRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ServiceId** | **int64** |  | 
**Variables** | [**[]Variable**](Variable.md) |  | 

## Methods

### NewServiceBindRequest

`func NewServiceBindRequest(serviceId int64, variables []Variable, ) *ServiceBindRequest`

NewServiceBindRequest instantiates a new ServiceBindRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewServiceBindRequestWithDefaults

`func NewServiceBindRequestWithDefaults() *ServiceBindRequest`

NewServiceBindRequestWithDefaults instantiates a new ServiceBindRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetServiceId

`func (o *ServiceBindRequest) GetServiceId() int64`

GetServiceId returns the ServiceId field if non-nil, zero value otherwise.

### GetServiceIdOk

`func (o *ServiceBindRequest) GetServiceIdOk() (*int64, bool)`

GetServiceIdOk returns a tuple with the ServiceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServiceId

`func (o *ServiceBindRequest) SetServiceId(v int64)`

SetServiceId sets ServiceId field to given value.


### GetVariables

`func (o *ServiceBindRequest) GetVariables() []Variable`

GetVariables returns the Variables field if non-nil, zero value otherwise.

### GetVariablesOk

`func (o *ServiceBindRequest) GetVariablesOk() (*[]Variable, bool)`

GetVariablesOk returns a tuple with the Variables field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVariables

`func (o *ServiceBindRequest) SetVariables(v []Variable)`

SetVariables sets Variables field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


