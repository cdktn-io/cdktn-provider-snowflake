# `dataSnowflakeOpenflowConnectors` Submodule <a name="`dataSnowflakeOpenflowConnectors` Submodule" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeOpenflowConnectors <a name="DataSnowflakeOpenflowConnectors" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors snowflake_openflow_connectors}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowconnectors"

datasnowflakeopenflowconnectors.NewDataSnowflakeOpenflowConnectors(scope Construct, id *string, config DataSnowflakeOpenflowConnectorsConfig) DataSnowflakeOpenflowConnectors
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig">DataSnowflakeOpenflowConnectorsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig">DataSnowflakeOpenflowConnectorsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.putIn">PutIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.putLimit">PutLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetIn">ResetIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetLike">ResetLike</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetLimit">ResetLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetStartsWith">ResetStartsWith</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetWithDescribe">ResetWithDescribe</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutIn` <a name="PutIn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.putIn"></a>

```go
func PutIn(value DataSnowflakeOpenflowConnectorsIn)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.putIn.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn">DataSnowflakeOpenflowConnectorsIn</a>

---

##### `PutLimit` <a name="PutLimit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.putLimit"></a>

```go
func PutLimit(value DataSnowflakeOpenflowConnectorsLimit)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.putLimit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit">DataSnowflakeOpenflowConnectorsLimit</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetId"></a>

```go
func ResetId()
```

##### `ResetIn` <a name="ResetIn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetIn"></a>

```go
func ResetIn()
```

##### `ResetLike` <a name="ResetLike" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetLike"></a>

```go
func ResetLike()
```

##### `ResetLimit` <a name="ResetLimit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetLimit"></a>

```go
func ResetLimit()
```

##### `ResetStartsWith` <a name="ResetStartsWith" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetStartsWith"></a>

```go
func ResetStartsWith()
```

##### `ResetWithDescribe` <a name="ResetWithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetWithDescribe"></a>

```go
func ResetWithDescribe()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataSnowflakeOpenflowConnectors resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowconnectors"

datasnowflakeopenflowconnectors.DataSnowflakeOpenflowConnectors_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowconnectors"

datasnowflakeopenflowconnectors.DataSnowflakeOpenflowConnectors_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowconnectors"

datasnowflakeopenflowconnectors.DataSnowflakeOpenflowConnectors_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowconnectors"

datasnowflakeopenflowconnectors.DataSnowflakeOpenflowConnectors_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataSnowflakeOpenflowConnectors resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataSnowflakeOpenflowConnectors to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataSnowflakeOpenflowConnectors that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataSnowflakeOpenflowConnectors to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.in">In</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference">DataSnowflakeOpenflowConnectorsInOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.limit">Limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference">DataSnowflakeOpenflowConnectorsLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.openflowConnectors">OpenflowConnectors</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList">DataSnowflakeOpenflowConnectorsOpenflowConnectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.inInput">InInput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn">DataSnowflakeOpenflowConnectorsIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.likeInput">LikeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.limitInput">LimitInput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit">DataSnowflakeOpenflowConnectorsLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.startsWithInput">StartsWithInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.withDescribeInput">WithDescribeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.like">Like</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.startsWith">StartsWith</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.withDescribe">WithDescribe</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `In`<sup>Required</sup> <a name="In" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.in"></a>

```go
func In() DataSnowflakeOpenflowConnectorsInOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference">DataSnowflakeOpenflowConnectorsInOutputReference</a>

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.limit"></a>

```go
func Limit() DataSnowflakeOpenflowConnectorsLimitOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference">DataSnowflakeOpenflowConnectorsLimitOutputReference</a>

---

##### `OpenflowConnectors`<sup>Required</sup> <a name="OpenflowConnectors" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.openflowConnectors"></a>

```go
func OpenflowConnectors() DataSnowflakeOpenflowConnectorsOpenflowConnectorsList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList">DataSnowflakeOpenflowConnectorsOpenflowConnectorsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InInput`<sup>Optional</sup> <a name="InInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.inInput"></a>

```go
func InInput() DataSnowflakeOpenflowConnectorsIn
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn">DataSnowflakeOpenflowConnectorsIn</a>

---

##### `LikeInput`<sup>Optional</sup> <a name="LikeInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.likeInput"></a>

```go
func LikeInput() *string
```

- *Type:* *string

---

##### `LimitInput`<sup>Optional</sup> <a name="LimitInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.limitInput"></a>

```go
func LimitInput() DataSnowflakeOpenflowConnectorsLimit
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit">DataSnowflakeOpenflowConnectorsLimit</a>

---

##### `StartsWithInput`<sup>Optional</sup> <a name="StartsWithInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.startsWithInput"></a>

```go
func StartsWithInput() *string
```

- *Type:* *string

---

##### `WithDescribeInput`<sup>Optional</sup> <a name="WithDescribeInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.withDescribeInput"></a>

```go
func WithDescribeInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Like`<sup>Required</sup> <a name="Like" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.like"></a>

```go
func Like() *string
```

- *Type:* *string

---

##### `StartsWith`<sup>Required</sup> <a name="StartsWith" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.startsWith"></a>

```go
func StartsWith() *string
```

- *Type:* *string

---

##### `WithDescribe`<sup>Required</sup> <a name="WithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.withDescribe"></a>

```go
func WithDescribe() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeOpenflowConnectorsConfig <a name="DataSnowflakeOpenflowConnectorsConfig" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowconnectors"

&datasnowflakeopenflowconnectors.DataSnowflakeOpenflowConnectorsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	In: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn,
	Like: *string,
	Limit: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit,
	StartsWith: *string,
	WithDescribe: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#id DataSnowflakeOpenflowConnectors#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.in">In</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn">DataSnowflakeOpenflowConnectorsIn</a></code> | in block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.like">Like</a></code> | <code>*string</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.limit">Limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit">DataSnowflakeOpenflowConnectorsLimit</a></code> | limit block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.startsWith">StartsWith</a></code> | <code>*string</code> | Filters the output with **case-sensitive** characters indicating the beginning of the object name. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.withDescribe">WithDescribe</a></code> | <code>interface{}</code> | (Default: `true`) Runs DESC OPENFLOW CONNECTOR for each connector returned by SHOW OPENFLOW CONNECTORS. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#id DataSnowflakeOpenflowConnectors#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `In`<sup>Optional</sup> <a name="In" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.in"></a>

```go
In DataSnowflakeOpenflowConnectorsIn
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn">DataSnowflakeOpenflowConnectorsIn</a>

in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#in DataSnowflakeOpenflowConnectors#in}

---

##### `Like`<sup>Optional</sup> <a name="Like" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.like"></a>

```go
Like *string
```

- *Type:* *string

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#like DataSnowflakeOpenflowConnectors#like}

---

##### `Limit`<sup>Optional</sup> <a name="Limit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.limit"></a>

```go
Limit DataSnowflakeOpenflowConnectorsLimit
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit">DataSnowflakeOpenflowConnectorsLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#limit DataSnowflakeOpenflowConnectors#limit}

---

##### `StartsWith`<sup>Optional</sup> <a name="StartsWith" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.startsWith"></a>

```go
StartsWith *string
```

- *Type:* *string

Filters the output with **case-sensitive** characters indicating the beginning of the object name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#starts_with DataSnowflakeOpenflowConnectors#starts_with}

---

##### `WithDescribe`<sup>Optional</sup> <a name="WithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.withDescribe"></a>

```go
WithDescribe interface{}
```

- *Type:* interface{}

(Default: `true`) Runs DESC OPENFLOW CONNECTOR for each connector returned by SHOW OPENFLOW CONNECTORS.

The output of describe is saved to the description field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#with_describe DataSnowflakeOpenflowConnectors#with_describe}

---

### DataSnowflakeOpenflowConnectorsIn <a name="DataSnowflakeOpenflowConnectorsIn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowconnectors"

&datasnowflakeopenflowconnectors.DataSnowflakeOpenflowConnectorsIn {
	Account: interface{},
	Database: *string,
	Schema: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn.property.account">Account</a></code> | <code>interface{}</code> | Returns records for the entire account. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn.property.database">Database</a></code> | <code>*string</code> | Returns records for the current database in use or for a specified database. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn.property.schema">Schema</a></code> | <code>*string</code> | Returns records for the current schema in use or a specified schema. Use fully qualified name. |

---

##### `Account`<sup>Optional</sup> <a name="Account" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn.property.account"></a>

```go
Account interface{}
```

- *Type:* interface{}

Returns records for the entire account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#account DataSnowflakeOpenflowConnectors#account}

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn.property.database"></a>

```go
Database *string
```

- *Type:* *string

Returns records for the current database in use or for a specified database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#database DataSnowflakeOpenflowConnectors#database}

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn.property.schema"></a>

```go
Schema *string
```

- *Type:* *string

Returns records for the current schema in use or a specified schema. Use fully qualified name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#schema DataSnowflakeOpenflowConnectors#schema}

---

### DataSnowflakeOpenflowConnectorsLimit <a name="DataSnowflakeOpenflowConnectorsLimit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowconnectors"

&datasnowflakeopenflowconnectors.DataSnowflakeOpenflowConnectorsLimit {
	Rows: *f64,
	From: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit.property.rows">Rows</a></code> | <code>*f64</code> | The maximum number of rows to return. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit.property.from">From</a></code> | <code>*string</code> | Specifies a **case-sensitive** pattern that is used to match object name. |

---

##### `Rows`<sup>Required</sup> <a name="Rows" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit.property.rows"></a>

```go
Rows *f64
```

- *Type:* *f64

The maximum number of rows to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#rows DataSnowflakeOpenflowConnectors#rows}

---

##### `From`<sup>Optional</sup> <a name="From" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit.property.from"></a>

```go
From *string
```

- *Type:* *string

Specifies a **case-sensitive** pattern that is used to match object name.

After the first match, the limit on the number of rows will be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#from DataSnowflakeOpenflowConnectors#from}

---

### DataSnowflakeOpenflowConnectorsOpenflowConnectors <a name="DataSnowflakeOpenflowConnectorsOpenflowConnectors" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectors.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowconnectors"

&datasnowflakeopenflowconnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectors {

}
```


### DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutput <a name="DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowconnectors"

&datasnowflakeopenflowconnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutput {

}
```


### DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutput <a name="DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowconnectors"

&datasnowflakeopenflowconnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutput {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeOpenflowConnectorsInOutputReference <a name="DataSnowflakeOpenflowConnectorsInOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowconnectors"

datasnowflakeopenflowconnectors.NewDataSnowflakeOpenflowConnectorsInOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataSnowflakeOpenflowConnectorsInOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.resetAccount">ResetAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.resetSchema">ResetSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccount` <a name="ResetAccount" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.resetAccount"></a>

```go
func ResetAccount()
```

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.resetDatabase"></a>

```go
func ResetDatabase()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.resetSchema"></a>

```go
func ResetSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.accountInput">AccountInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.schemaInput">SchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.account">Account</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn">DataSnowflakeOpenflowConnectorsIn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountInput`<sup>Optional</sup> <a name="AccountInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.accountInput"></a>

```go
func AccountInput() interface{}
```

- *Type:* interface{}

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.schemaInput"></a>

```go
func SchemaInput() *string
```

- *Type:* *string

---

##### `Account`<sup>Required</sup> <a name="Account" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.account"></a>

```go
func Account() interface{}
```

- *Type:* interface{}

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeOpenflowConnectorsIn
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn">DataSnowflakeOpenflowConnectorsIn</a>

---


### DataSnowflakeOpenflowConnectorsLimitOutputReference <a name="DataSnowflakeOpenflowConnectorsLimitOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowconnectors"

datasnowflakeopenflowconnectors.NewDataSnowflakeOpenflowConnectorsLimitOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataSnowflakeOpenflowConnectorsLimitOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.resetFrom">ResetFrom</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFrom` <a name="ResetFrom" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.resetFrom"></a>

```go
func ResetFrom()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.fromInput">FromInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.rowsInput">RowsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.from">From</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.rows">Rows</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit">DataSnowflakeOpenflowConnectorsLimit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.fromInput"></a>

```go
func FromInput() *string
```

- *Type:* *string

---

##### `RowsInput`<sup>Optional</sup> <a name="RowsInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.rowsInput"></a>

```go
func RowsInput() *f64
```

- *Type:* *f64

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.from"></a>

```go
func From() *string
```

- *Type:* *string

---

##### `Rows`<sup>Required</sup> <a name="Rows" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.rows"></a>

```go
func Rows() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeOpenflowConnectorsLimit
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit">DataSnowflakeOpenflowConnectorsLimit</a>

---


### DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList <a name="DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowconnectors"

datasnowflakeopenflowconnectors.NewDataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.get"></a>

```go
func Get(index *f64) DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference <a name="DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowconnectors"

datasnowflakeopenflowconnectors.NewDataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.connectorDefinition">ConnectorDefinition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.connectorUrl">ConnectorUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.defaultVersion">DefaultVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.defaultVersionAlias">DefaultVersionAlias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.defaultVersionGitCommitHash">DefaultVersionGitCommitHash</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.defaultVersionLocationUri">DefaultVersionLocationUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.defaultVersionName">DefaultVersionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.defaultVersionSourceLocationUri">DefaultVersionSourceLocationUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.lastVersionAlias">LastVersionAlias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.lastVersionGitCommitHash">LastVersionGitCommitHash</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.lastVersionLocationUri">LastVersionLocationUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.lastVersionName">LastVersionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.lastVersionSourceLocationUri">LastVersionSourceLocationUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.liveVersionLocationUri">LiveVersionLocationUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.runtime">Runtime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutput">DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `ConnectorDefinition`<sup>Required</sup> <a name="ConnectorDefinition" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.connectorDefinition"></a>

```go
func ConnectorDefinition() *string
```

- *Type:* *string

---

##### `ConnectorUrl`<sup>Required</sup> <a name="ConnectorUrl" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.connectorUrl"></a>

```go
func ConnectorUrl() *string
```

- *Type:* *string

---

##### `DefaultVersion`<sup>Required</sup> <a name="DefaultVersion" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.defaultVersion"></a>

```go
func DefaultVersion() *string
```

- *Type:* *string

---

##### `DefaultVersionAlias`<sup>Required</sup> <a name="DefaultVersionAlias" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.defaultVersionAlias"></a>

```go
func DefaultVersionAlias() *string
```

- *Type:* *string

---

##### `DefaultVersionGitCommitHash`<sup>Required</sup> <a name="DefaultVersionGitCommitHash" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.defaultVersionGitCommitHash"></a>

```go
func DefaultVersionGitCommitHash() *string
```

- *Type:* *string

---

##### `DefaultVersionLocationUri`<sup>Required</sup> <a name="DefaultVersionLocationUri" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.defaultVersionLocationUri"></a>

```go
func DefaultVersionLocationUri() *string
```

- *Type:* *string

---

##### `DefaultVersionName`<sup>Required</sup> <a name="DefaultVersionName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.defaultVersionName"></a>

```go
func DefaultVersionName() *string
```

- *Type:* *string

---

##### `DefaultVersionSourceLocationUri`<sup>Required</sup> <a name="DefaultVersionSourceLocationUri" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.defaultVersionSourceLocationUri"></a>

```go
func DefaultVersionSourceLocationUri() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `LastVersionAlias`<sup>Required</sup> <a name="LastVersionAlias" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.lastVersionAlias"></a>

```go
func LastVersionAlias() *string
```

- *Type:* *string

---

##### `LastVersionGitCommitHash`<sup>Required</sup> <a name="LastVersionGitCommitHash" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.lastVersionGitCommitHash"></a>

```go
func LastVersionGitCommitHash() *string
```

- *Type:* *string

---

##### `LastVersionLocationUri`<sup>Required</sup> <a name="LastVersionLocationUri" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.lastVersionLocationUri"></a>

```go
func LastVersionLocationUri() *string
```

- *Type:* *string

---

##### `LastVersionName`<sup>Required</sup> <a name="LastVersionName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.lastVersionName"></a>

```go
func LastVersionName() *string
```

- *Type:* *string

---

##### `LastVersionSourceLocationUri`<sup>Required</sup> <a name="LastVersionSourceLocationUri" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.lastVersionSourceLocationUri"></a>

```go
func LastVersionSourceLocationUri() *string
```

- *Type:* *string

---

##### `LiveVersionLocationUri`<sup>Required</sup> <a name="LiveVersionLocationUri" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.liveVersionLocationUri"></a>

```go
func LiveVersionLocationUri() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.runtime"></a>

```go
func Runtime() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutput">DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutput</a>

---


### DataSnowflakeOpenflowConnectorsOpenflowConnectorsList <a name="DataSnowflakeOpenflowConnectorsOpenflowConnectorsList" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowconnectors"

datasnowflakeopenflowconnectors.NewDataSnowflakeOpenflowConnectorsOpenflowConnectorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataSnowflakeOpenflowConnectorsOpenflowConnectorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.get"></a>

```go
func Get(index *f64) DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference <a name="DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowconnectors"

datasnowflakeopenflowconnectors.NewDataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList">DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList">DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectors">DataSnowflakeOpenflowConnectorsOpenflowConnectors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.property.describeOutput"></a>

```go
func DescribeOutput() DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList">DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList</a>

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.property.showOutput"></a>

```go
func ShowOutput() DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList">DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeOpenflowConnectorsOpenflowConnectors
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectors">DataSnowflakeOpenflowConnectorsOpenflowConnectors</a>

---


### DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList <a name="DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowconnectors"

datasnowflakeopenflowconnectors.NewDataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.get"></a>

```go
func Get(index *f64) DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference <a name="DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowconnectors"

datasnowflakeopenflowconnectors.NewDataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.connectorDefinition">ConnectorDefinition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.connectorUrl">ConnectorUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.defaultVersion">DefaultVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.defaultVersionAlias">DefaultVersionAlias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.defaultVersionLocationUri">DefaultVersionLocationUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.defaultVersionName">DefaultVersionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.defaultVersionSourceLocationUri">DefaultVersionSourceLocationUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.liveVersionLocationUri">LiveVersionLocationUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.runtime">Runtime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.updatedOn">UpdatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutput">DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `ConnectorDefinition`<sup>Required</sup> <a name="ConnectorDefinition" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.connectorDefinition"></a>

```go
func ConnectorDefinition() *string
```

- *Type:* *string

---

##### `ConnectorUrl`<sup>Required</sup> <a name="ConnectorUrl" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.connectorUrl"></a>

```go
func ConnectorUrl() *string
```

- *Type:* *string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `DefaultVersion`<sup>Required</sup> <a name="DefaultVersion" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.defaultVersion"></a>

```go
func DefaultVersion() *string
```

- *Type:* *string

---

##### `DefaultVersionAlias`<sup>Required</sup> <a name="DefaultVersionAlias" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.defaultVersionAlias"></a>

```go
func DefaultVersionAlias() *string
```

- *Type:* *string

---

##### `DefaultVersionLocationUri`<sup>Required</sup> <a name="DefaultVersionLocationUri" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.defaultVersionLocationUri"></a>

```go
func DefaultVersionLocationUri() *string
```

- *Type:* *string

---

##### `DefaultVersionName`<sup>Required</sup> <a name="DefaultVersionName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.defaultVersionName"></a>

```go
func DefaultVersionName() *string
```

- *Type:* *string

---

##### `DefaultVersionSourceLocationUri`<sup>Required</sup> <a name="DefaultVersionSourceLocationUri" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.defaultVersionSourceLocationUri"></a>

```go
func DefaultVersionSourceLocationUri() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `LiveVersionLocationUri`<sup>Required</sup> <a name="LiveVersionLocationUri" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.liveVersionLocationUri"></a>

```go
func LiveVersionLocationUri() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.runtime"></a>

```go
func Runtime() *string
```

- *Type:* *string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `UpdatedOn`<sup>Required</sup> <a name="UpdatedOn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.updatedOn"></a>

```go
func UpdatedOn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutput">DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutput</a>

---



