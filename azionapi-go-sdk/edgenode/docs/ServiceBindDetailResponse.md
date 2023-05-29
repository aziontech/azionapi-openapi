# ServiceBindDetailResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int64** |  | 
**ServiceId** | **int64** |  | 
**ServiceName** | **string** |  | 
**Variables** | [**[]Variable**](Variable.md) |  | 

## Methods

### NewServiceBindDetailResponse

`func NewServiceBindDetailResponse(id int64, serviceId int64, serviceName string, variables []Variable, ) *ServiceBindDetailResponse`

NewServiceBindDetailResponse instantiates a new ServiceBindDetailResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewServiceBindDetailResponseWithDefaults

`func NewServiceBindDetailResponseWithDefaults() *ServiceBindDetailResponse`

NewServiceBindDetailResponseWithDefaults instantiates a new ServiceBindDetailResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ServiceBindDetailResponse) GetId() int64`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ServiceBindDetailResponse) GetIdOk() (*int64, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ServiceBindDetailResponse) SetId(v int64)`

SetId sets Id field to given value.


### GetServiceId

`func (o *ServiceBindDetailResponse) GetServiceId() int64`

GetServiceId returns the ServiceId field if non-nil, zero value otherwise.

### GetServiceIdOk

`func (o *ServiceBindDetailResponse) GetServiceIdOk() (*int64, bool)`

GetServiceIdOk returns a tuple with the ServiceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServiceId

`func (o *ServiceBindDetailResponse) SetServiceId(v int64)`

SetServiceId sets ServiceId field to given value.


### GetServiceName

`func (o *ServiceBindDetailResponse) GetServiceName() string`

GetServiceName returns the ServiceName field if non-nil, zero value otherwise.

### GetServiceNameOk

`func (o *ServiceBindDetailResponse) GetServiceNameOk() (*string, bool)`

GetServiceNameOk returns a tuple with the ServiceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServiceName

`func (o *ServiceBindDetailResponse) SetServiceName(v string)`

SetServiceName sets ServiceName field to given value.


### GetVariables

`func (o *ServiceBindDetailResponse) GetVariables() []Variable`

GetVariables returns the Variables field if non-nil, zero value otherwise.

### GetVariablesOk

`func (o *ServiceBindDetailResponse) GetVariablesOk() (*[]Variable, bool)`

GetVariablesOk returns a tuple with the Variables field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVariables

`func (o *ServiceBindDetailResponse) SetVariables(v []Variable)`

SetVariables sets Variables field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


