# `dataSnowflakeOpenflowRuntimes` Submodule <a name="`dataSnowflakeOpenflowRuntimes` Submodule" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeOpenflowRuntimes <a name="DataSnowflakeOpenflowRuntimes" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes snowflake_openflow_runtimes}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowruntimes"

datasnowflakeopenflowruntimes.NewDataSnowflakeOpenflowRuntimes(scope Construct, id *string, config DataSnowflakeOpenflowRuntimesConfig) DataSnowflakeOpenflowRuntimes
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig">DataSnowflakeOpenflowRuntimesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig">DataSnowflakeOpenflowRuntimesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.putIn">PutIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.putLimit">PutLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetIn">ResetIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetLike">ResetLike</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetLimit">ResetLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetStartsWith">ResetStartsWith</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetWithDescribe">ResetWithDescribe</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutIn` <a name="PutIn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.putIn"></a>

```go
func PutIn(value DataSnowflakeOpenflowRuntimesIn)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.putIn.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn">DataSnowflakeOpenflowRuntimesIn</a>

---

##### `PutLimit` <a name="PutLimit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.putLimit"></a>

```go
func PutLimit(value DataSnowflakeOpenflowRuntimesLimit)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.putLimit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit">DataSnowflakeOpenflowRuntimesLimit</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetId"></a>

```go
func ResetId()
```

##### `ResetIn` <a name="ResetIn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetIn"></a>

```go
func ResetIn()
```

##### `ResetLike` <a name="ResetLike" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetLike"></a>

```go
func ResetLike()
```

##### `ResetLimit` <a name="ResetLimit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetLimit"></a>

```go
func ResetLimit()
```

##### `ResetStartsWith` <a name="ResetStartsWith" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetStartsWith"></a>

```go
func ResetStartsWith()
```

##### `ResetWithDescribe` <a name="ResetWithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetWithDescribe"></a>

```go
func ResetWithDescribe()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataSnowflakeOpenflowRuntimes resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowruntimes"

datasnowflakeopenflowruntimes.DataSnowflakeOpenflowRuntimes_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowruntimes"

datasnowflakeopenflowruntimes.DataSnowflakeOpenflowRuntimes_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowruntimes"

datasnowflakeopenflowruntimes.DataSnowflakeOpenflowRuntimes_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowruntimes"

datasnowflakeopenflowruntimes.DataSnowflakeOpenflowRuntimes_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataSnowflakeOpenflowRuntimes resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataSnowflakeOpenflowRuntimes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataSnowflakeOpenflowRuntimes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataSnowflakeOpenflowRuntimes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.in">In</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference">DataSnowflakeOpenflowRuntimesInOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.limit">Limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference">DataSnowflakeOpenflowRuntimesLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.openflowRuntimes">OpenflowRuntimes</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList">DataSnowflakeOpenflowRuntimesOpenflowRuntimesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.inInput">InInput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn">DataSnowflakeOpenflowRuntimesIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.likeInput">LikeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.limitInput">LimitInput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit">DataSnowflakeOpenflowRuntimesLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.startsWithInput">StartsWithInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.withDescribeInput">WithDescribeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.like">Like</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.startsWith">StartsWith</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.withDescribe">WithDescribe</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `In`<sup>Required</sup> <a name="In" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.in"></a>

```go
func In() DataSnowflakeOpenflowRuntimesInOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference">DataSnowflakeOpenflowRuntimesInOutputReference</a>

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.limit"></a>

```go
func Limit() DataSnowflakeOpenflowRuntimesLimitOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference">DataSnowflakeOpenflowRuntimesLimitOutputReference</a>

---

##### `OpenflowRuntimes`<sup>Required</sup> <a name="OpenflowRuntimes" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.openflowRuntimes"></a>

```go
func OpenflowRuntimes() DataSnowflakeOpenflowRuntimesOpenflowRuntimesList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList">DataSnowflakeOpenflowRuntimesOpenflowRuntimesList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InInput`<sup>Optional</sup> <a name="InInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.inInput"></a>

```go
func InInput() DataSnowflakeOpenflowRuntimesIn
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn">DataSnowflakeOpenflowRuntimesIn</a>

---

##### `LikeInput`<sup>Optional</sup> <a name="LikeInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.likeInput"></a>

```go
func LikeInput() *string
```

- *Type:* *string

---

##### `LimitInput`<sup>Optional</sup> <a name="LimitInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.limitInput"></a>

```go
func LimitInput() DataSnowflakeOpenflowRuntimesLimit
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit">DataSnowflakeOpenflowRuntimesLimit</a>

---

##### `StartsWithInput`<sup>Optional</sup> <a name="StartsWithInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.startsWithInput"></a>

```go
func StartsWithInput() *string
```

- *Type:* *string

---

##### `WithDescribeInput`<sup>Optional</sup> <a name="WithDescribeInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.withDescribeInput"></a>

```go
func WithDescribeInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Like`<sup>Required</sup> <a name="Like" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.like"></a>

```go
func Like() *string
```

- *Type:* *string

---

##### `StartsWith`<sup>Required</sup> <a name="StartsWith" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.startsWith"></a>

```go
func StartsWith() *string
```

- *Type:* *string

---

##### `WithDescribe`<sup>Required</sup> <a name="WithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.withDescribe"></a>

```go
func WithDescribe() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeOpenflowRuntimesConfig <a name="DataSnowflakeOpenflowRuntimesConfig" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowruntimes"

&datasnowflakeopenflowruntimes.DataSnowflakeOpenflowRuntimesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	In: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn,
	Like: *string,
	Limit: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit,
	StartsWith: *string,
	WithDescribe: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#id DataSnowflakeOpenflowRuntimes#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.in">In</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn">DataSnowflakeOpenflowRuntimesIn</a></code> | in block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.like">Like</a></code> | <code>*string</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.limit">Limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit">DataSnowflakeOpenflowRuntimesLimit</a></code> | limit block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.startsWith">StartsWith</a></code> | <code>*string</code> | Filters the output with **case-sensitive** characters indicating the beginning of the object name. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.withDescribe">WithDescribe</a></code> | <code>interface{}</code> | (Default: `true`) Runs DESC OPENFLOW RUNTIME for each runtime returned by SHOW OPENFLOW RUNTIMES. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#id DataSnowflakeOpenflowRuntimes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `In`<sup>Optional</sup> <a name="In" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.in"></a>

```go
In DataSnowflakeOpenflowRuntimesIn
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn">DataSnowflakeOpenflowRuntimesIn</a>

in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#in DataSnowflakeOpenflowRuntimes#in}

---

##### `Like`<sup>Optional</sup> <a name="Like" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.like"></a>

```go
Like *string
```

- *Type:* *string

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#like DataSnowflakeOpenflowRuntimes#like}

---

##### `Limit`<sup>Optional</sup> <a name="Limit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.limit"></a>

```go
Limit DataSnowflakeOpenflowRuntimesLimit
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit">DataSnowflakeOpenflowRuntimesLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#limit DataSnowflakeOpenflowRuntimes#limit}

---

##### `StartsWith`<sup>Optional</sup> <a name="StartsWith" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.startsWith"></a>

```go
StartsWith *string
```

- *Type:* *string

Filters the output with **case-sensitive** characters indicating the beginning of the object name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#starts_with DataSnowflakeOpenflowRuntimes#starts_with}

---

##### `WithDescribe`<sup>Optional</sup> <a name="WithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.withDescribe"></a>

```go
WithDescribe interface{}
```

- *Type:* interface{}

(Default: `true`) Runs DESC OPENFLOW RUNTIME for each runtime returned by SHOW OPENFLOW RUNTIMES.

The output of describe is saved to the description field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#with_describe DataSnowflakeOpenflowRuntimes#with_describe}

---

### DataSnowflakeOpenflowRuntimesIn <a name="DataSnowflakeOpenflowRuntimesIn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowruntimes"

&datasnowflakeopenflowruntimes.DataSnowflakeOpenflowRuntimesIn {
	Account: interface{},
	Database: *string,
	Schema: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn.property.account">Account</a></code> | <code>interface{}</code> | Returns records for the entire account. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn.property.database">Database</a></code> | <code>*string</code> | Returns records for the current database in use or for a specified database. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn.property.schema">Schema</a></code> | <code>*string</code> | Returns records for the current schema in use or a specified schema. Use fully qualified name. |

---

##### `Account`<sup>Optional</sup> <a name="Account" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn.property.account"></a>

```go
Account interface{}
```

- *Type:* interface{}

Returns records for the entire account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#account DataSnowflakeOpenflowRuntimes#account}

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn.property.database"></a>

```go
Database *string
```

- *Type:* *string

Returns records for the current database in use or for a specified database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#database DataSnowflakeOpenflowRuntimes#database}

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn.property.schema"></a>

```go
Schema *string
```

- *Type:* *string

Returns records for the current schema in use or a specified schema. Use fully qualified name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#schema DataSnowflakeOpenflowRuntimes#schema}

---

### DataSnowflakeOpenflowRuntimesLimit <a name="DataSnowflakeOpenflowRuntimesLimit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowruntimes"

&datasnowflakeopenflowruntimes.DataSnowflakeOpenflowRuntimesLimit {
	Rows: *f64,
	From: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit.property.rows">Rows</a></code> | <code>*f64</code> | The maximum number of rows to return. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit.property.from">From</a></code> | <code>*string</code> | Specifies a **case-sensitive** pattern that is used to match object name. |

---

##### `Rows`<sup>Required</sup> <a name="Rows" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit.property.rows"></a>

```go
Rows *f64
```

- *Type:* *f64

The maximum number of rows to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#rows DataSnowflakeOpenflowRuntimes#rows}

---

##### `From`<sup>Optional</sup> <a name="From" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit.property.from"></a>

```go
From *string
```

- *Type:* *string

Specifies a **case-sensitive** pattern that is used to match object name.

After the first match, the limit on the number of rows will be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#from DataSnowflakeOpenflowRuntimes#from}

---

### DataSnowflakeOpenflowRuntimesOpenflowRuntimes <a name="DataSnowflakeOpenflowRuntimesOpenflowRuntimes" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowruntimes"

&datasnowflakeopenflowruntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimes {

}
```


### DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutput <a name="DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowruntimes"

&datasnowflakeopenflowruntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutput {

}
```


### DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutput <a name="DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowruntimes"

&datasnowflakeopenflowruntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutput {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeOpenflowRuntimesInOutputReference <a name="DataSnowflakeOpenflowRuntimesInOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowruntimes"

datasnowflakeopenflowruntimes.NewDataSnowflakeOpenflowRuntimesInOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataSnowflakeOpenflowRuntimesInOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.resetAccount">ResetAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.resetSchema">ResetSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccount` <a name="ResetAccount" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.resetAccount"></a>

```go
func ResetAccount()
```

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.resetDatabase"></a>

```go
func ResetDatabase()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.resetSchema"></a>

```go
func ResetSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.accountInput">AccountInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.schemaInput">SchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.account">Account</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn">DataSnowflakeOpenflowRuntimesIn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountInput`<sup>Optional</sup> <a name="AccountInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.accountInput"></a>

```go
func AccountInput() interface{}
```

- *Type:* interface{}

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.schemaInput"></a>

```go
func SchemaInput() *string
```

- *Type:* *string

---

##### `Account`<sup>Required</sup> <a name="Account" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.account"></a>

```go
func Account() interface{}
```

- *Type:* interface{}

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeOpenflowRuntimesIn
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn">DataSnowflakeOpenflowRuntimesIn</a>

---


### DataSnowflakeOpenflowRuntimesLimitOutputReference <a name="DataSnowflakeOpenflowRuntimesLimitOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowruntimes"

datasnowflakeopenflowruntimes.NewDataSnowflakeOpenflowRuntimesLimitOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataSnowflakeOpenflowRuntimesLimitOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.resetFrom">ResetFrom</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFrom` <a name="ResetFrom" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.resetFrom"></a>

```go
func ResetFrom()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.fromInput">FromInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.rowsInput">RowsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.from">From</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.rows">Rows</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit">DataSnowflakeOpenflowRuntimesLimit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.fromInput"></a>

```go
func FromInput() *string
```

- *Type:* *string

---

##### `RowsInput`<sup>Optional</sup> <a name="RowsInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.rowsInput"></a>

```go
func RowsInput() *f64
```

- *Type:* *f64

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.from"></a>

```go
func From() *string
```

- *Type:* *string

---

##### `Rows`<sup>Required</sup> <a name="Rows" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.rows"></a>

```go
func Rows() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeOpenflowRuntimesLimit
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit">DataSnowflakeOpenflowRuntimesLimit</a>

---


### DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList <a name="DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowruntimes"

datasnowflakeopenflowruntimes.NewDataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.get"></a>

```go
func Get(index *f64) DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference <a name="DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowruntimes"

datasnowflakeopenflowruntimes.NewDataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.deployment">Deployment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.executeAsRole">ExecuteAsRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.externalAccessIntegrations">ExternalAccessIntegrations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.initiallySuspended">InitiallySuspended</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.maxNodes">MaxNodes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.minNodes">MinNodes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.nodeType">NodeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.nodeTypeTier">NodeTypeTier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.serverUrl">ServerUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutput">DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Deployment`<sup>Required</sup> <a name="Deployment" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.deployment"></a>

```go
func Deployment() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ExecuteAsRole`<sup>Required</sup> <a name="ExecuteAsRole" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.executeAsRole"></a>

```go
func ExecuteAsRole() *string
```

- *Type:* *string

---

##### `ExternalAccessIntegrations`<sup>Required</sup> <a name="ExternalAccessIntegrations" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.externalAccessIntegrations"></a>

```go
func ExternalAccessIntegrations() *[]*string
```

- *Type:* *[]*string

---

##### `InitiallySuspended`<sup>Required</sup> <a name="InitiallySuspended" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.initiallySuspended"></a>

```go
func InitiallySuspended() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `MaxNodes`<sup>Required</sup> <a name="MaxNodes" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.maxNodes"></a>

```go
func MaxNodes() *f64
```

- *Type:* *f64

---

##### `MinNodes`<sup>Required</sup> <a name="MinNodes" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.minNodes"></a>

```go
func MinNodes() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NodeType`<sup>Required</sup> <a name="NodeType" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.nodeType"></a>

```go
func NodeType() *string
```

- *Type:* *string

---

##### `NodeTypeTier`<sup>Required</sup> <a name="NodeTypeTier" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.nodeTypeTier"></a>

```go
func NodeTypeTier() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `ServerUrl`<sup>Required</sup> <a name="ServerUrl" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.serverUrl"></a>

```go
func ServerUrl() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutput">DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutput</a>

---


### DataSnowflakeOpenflowRuntimesOpenflowRuntimesList <a name="DataSnowflakeOpenflowRuntimesOpenflowRuntimesList" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowruntimes"

datasnowflakeopenflowruntimes.NewDataSnowflakeOpenflowRuntimesOpenflowRuntimesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataSnowflakeOpenflowRuntimesOpenflowRuntimesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.get"></a>

```go
func Get(index *f64) DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference <a name="DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowruntimes"

datasnowflakeopenflowruntimes.NewDataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList">DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList">DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimes">DataSnowflakeOpenflowRuntimesOpenflowRuntimes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.property.describeOutput"></a>

```go
func DescribeOutput() DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList">DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList</a>

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.property.showOutput"></a>

```go
func ShowOutput() DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList">DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeOpenflowRuntimesOpenflowRuntimes
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimes">DataSnowflakeOpenflowRuntimesOpenflowRuntimes</a>

---


### DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList <a name="DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowruntimes"

datasnowflakeopenflowruntimes.NewDataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.get"></a>

```go
func Get(index *f64) DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference <a name="DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowruntimes"

datasnowflakeopenflowruntimes.NewDataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.deployment">Deployment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.executeAsRole">ExecuteAsRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.externalAccessIntegrations">ExternalAccessIntegrations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.initiallySuspended">InitiallySuspended</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.maxNodes">MaxNodes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.minNodes">MinNodes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.nodeType">NodeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.updatedOn">UpdatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutput">DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `Deployment`<sup>Required</sup> <a name="Deployment" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.deployment"></a>

```go
func Deployment() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ExecuteAsRole`<sup>Required</sup> <a name="ExecuteAsRole" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.executeAsRole"></a>

```go
func ExecuteAsRole() *string
```

- *Type:* *string

---

##### `ExternalAccessIntegrations`<sup>Required</sup> <a name="ExternalAccessIntegrations" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.externalAccessIntegrations"></a>

```go
func ExternalAccessIntegrations() *[]*string
```

- *Type:* *[]*string

---

##### `InitiallySuspended`<sup>Required</sup> <a name="InitiallySuspended" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.initiallySuspended"></a>

```go
func InitiallySuspended() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `MaxNodes`<sup>Required</sup> <a name="MaxNodes" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.maxNodes"></a>

```go
func MaxNodes() *f64
```

- *Type:* *f64

---

##### `MinNodes`<sup>Required</sup> <a name="MinNodes" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.minNodes"></a>

```go
func MinNodes() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NodeType`<sup>Required</sup> <a name="NodeType" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.nodeType"></a>

```go
func NodeType() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `UpdatedOn`<sup>Required</sup> <a name="UpdatedOn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.updatedOn"></a>

```go
func UpdatedOn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutput">DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutput</a>

---



