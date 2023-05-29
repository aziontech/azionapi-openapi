# ServiceResponseWithTotal

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Services** | [**[]ServiceResponse**](ServiceResponse.md) |  | 
**Total** | **int64** |  | 

## Methods

### NewServiceResponseWithTotal

`func NewServiceResponseWithTotal(services []ServiceResponse, total int64, ) *ServiceResponseWithTotal`

NewServiceResponseWithTotal instantiates a new ServiceResponseWithTotal object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewServiceResponseWithTotalWithDefaults

`func NewServiceResponseWithTotalWithDefaults() *ServiceResponseWithTotal`

NewServiceResponseWithTotalWithDefaults instantiates a new ServiceResponseWithTotal object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetServices

`func (o *ServiceResponseWithTotal) GetServices() []ServiceResponse`

GetServices returns the Services field if non-nil, zero value otherwise.

### GetServicesOk

`func (o *ServiceResponseWithTotal) GetServicesOk() (*[]ServiceResponse, bool)`

GetServicesOk returns a tuple with the Services field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServices

`func (o *ServiceResponseWithTotal) SetServices(v []ServiceResponse)`

SetServices sets Services field to given value.


### GetTotal

`func (o *ServiceResponseWithTotal) GetTotal() int64`

GetTotal returns the Total field if non-nil, zero value otherwise.

### GetTotalOk

`func (o *ServiceResponseWithTotal) GetTotalOk() (*int64, bool)`

GetTotalOk returns a tuple with the Total field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotal

`func (o *ServiceResponseWithTotal) SetTotal(v int64)`

SetTotal sets Total field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


