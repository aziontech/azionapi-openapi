# ServiceResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BindId** | **int64** |  | 
**IsBound** | **int64** |  | 
**LastEditor** | **string** |  | 
**Name** | **string** |  | 
**ServiceId** | **int64** |  | 
**UpdatedAt** | **time.Time** |  | 

## Methods

### NewServiceResponse

`func NewServiceResponse(bindId int64, isBound int64, lastEditor string, name string, serviceId int64, updatedAt time.Time, ) *ServiceResponse`

NewServiceResponse instantiates a new ServiceResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewServiceResponseWithDefaults

`func NewServiceResponseWithDefaults() *ServiceResponse`

NewServiceResponseWithDefaults instantiates a new ServiceResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBindId

`func (o *ServiceResponse) GetBindId() int64`

GetBindId returns the BindId field if non-nil, zero value otherwise.

### GetBindIdOk

`func (o *ServiceResponse) GetBindIdOk() (*int64, bool)`

GetBindIdOk returns a tuple with the BindId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBindId

`func (o *ServiceResponse) SetBindId(v int64)`

SetBindId sets BindId field to given value.


### GetIsBound

`func (o *ServiceResponse) GetIsBound() int64`

GetIsBound returns the IsBound field if non-nil, zero value otherwise.

### GetIsBoundOk

`func (o *ServiceResponse) GetIsBoundOk() (*int64, bool)`

GetIsBoundOk returns a tuple with the IsBound field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsBound

`func (o *ServiceResponse) SetIsBound(v int64)`

SetIsBound sets IsBound field to given value.


### GetLastEditor

`func (o *ServiceResponse) GetLastEditor() string`

GetLastEditor returns the LastEditor field if non-nil, zero value otherwise.

### GetLastEditorOk

`func (o *ServiceResponse) GetLastEditorOk() (*string, bool)`

GetLastEditorOk returns a tuple with the LastEditor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastEditor

`func (o *ServiceResponse) SetLastEditor(v string)`

SetLastEditor sets LastEditor field to given value.


### GetName

`func (o *ServiceResponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ServiceResponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ServiceResponse) SetName(v string)`

SetName sets Name field to given value.


### GetServiceId

`func (o *ServiceResponse) GetServiceId() int64`

GetServiceId returns the ServiceId field if non-nil, zero value otherwise.

### GetServiceIdOk

`func (o *ServiceResponse) GetServiceIdOk() (*int64, bool)`

GetServiceIdOk returns a tuple with the ServiceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServiceId

`func (o *ServiceResponse) SetServiceId(v int64)`

SetServiceId sets ServiceId field to given value.


### GetUpdatedAt

`func (o *ServiceResponse) GetUpdatedAt() time.Time`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *ServiceResponse) GetUpdatedAtOk() (*time.Time, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *ServiceResponse) SetUpdatedAt(v time.Time)`

SetUpdatedAt sets UpdatedAt field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


