# `dataSnowflakeOpenflowConnectorDefinitions` Submodule <a name="`dataSnowflakeOpenflowConnectorDefinitions` Submodule" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeOpenflowConnectorDefinitions <a name="DataSnowflakeOpenflowConnectorDefinitions" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connector_definitions snowflake_openflow_connector_definitions}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowconnectordefinitions"

datasnowflakeopenflowconnectordefinitions.NewDataSnowflakeOpenflowConnectorDefinitions(scope Construct, id *string, config DataSnowflakeOpenflowConnectorDefinitionsConfig) DataSnowflakeOpenflowConnectorDefinitions
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig">DataSnowflakeOpenflowConnectorDefinitionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig">DataSnowflakeOpenflowConnectorDefinitionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.putLimit">PutLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.resetLike">ResetLike</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.resetLimit">ResetLimit</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutLimit` <a name="PutLimit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.putLimit"></a>

```go
func PutLimit(value DataSnowflakeOpenflowConnectorDefinitionsLimit)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.putLimit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimit">DataSnowflakeOpenflowConnectorDefinitionsLimit</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.resetId"></a>

```go
func ResetId()
```

##### `ResetLike` <a name="ResetLike" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.resetLike"></a>

```go
func ResetLike()
```

##### `ResetLimit` <a name="ResetLimit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.resetLimit"></a>

```go
func ResetLimit()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataSnowflakeOpenflowConnectorDefinitions resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowconnectordefinitions"

datasnowflakeopenflowconnectordefinitions.DataSnowflakeOpenflowConnectorDefinitions_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowconnectordefinitions"

datasnowflakeopenflowconnectordefinitions.DataSnowflakeOpenflowConnectorDefinitions_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowconnectordefinitions"

datasnowflakeopenflowconnectordefinitions.DataSnowflakeOpenflowConnectorDefinitions_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowconnectordefinitions"

datasnowflakeopenflowconnectordefinitions.DataSnowflakeOpenflowConnectorDefinitions_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataSnowflakeOpenflowConnectorDefinitions resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataSnowflakeOpenflowConnectorDefinitions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataSnowflakeOpenflowConnectorDefinitions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connector_definitions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataSnowflakeOpenflowConnectorDefinitions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.limit">Limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference">DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.openflowConnectorDefinitions">OpenflowConnectorDefinitions</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList">DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.likeInput">LikeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.limitInput">LimitInput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimit">DataSnowflakeOpenflowConnectorDefinitionsLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.like">Like</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.limit"></a>

```go
func Limit() DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference">DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference</a>

---

##### `OpenflowConnectorDefinitions`<sup>Required</sup> <a name="OpenflowConnectorDefinitions" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.openflowConnectorDefinitions"></a>

```go
func OpenflowConnectorDefinitions() DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList">DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LikeInput`<sup>Optional</sup> <a name="LikeInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.likeInput"></a>

```go
func LikeInput() *string
```

- *Type:* *string

---

##### `LimitInput`<sup>Optional</sup> <a name="LimitInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.limitInput"></a>

```go
func LimitInput() DataSnowflakeOpenflowConnectorDefinitionsLimit
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimit">DataSnowflakeOpenflowConnectorDefinitionsLimit</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Like`<sup>Required</sup> <a name="Like" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.like"></a>

```go
func Like() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitions.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeOpenflowConnectorDefinitionsConfig <a name="DataSnowflakeOpenflowConnectorDefinitionsConfig" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowconnectordefinitions"

&datasnowflakeopenflowconnectordefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	Like: *string,
	Limit: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimit,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connector_definitions#id DataSnowflakeOpenflowConnectorDefinitions#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.like">Like</a></code> | <code>*string</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.limit">Limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimit">DataSnowflakeOpenflowConnectorDefinitionsLimit</a></code> | limit block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connector_definitions#id DataSnowflakeOpenflowConnectorDefinitions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Like`<sup>Optional</sup> <a name="Like" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.like"></a>

```go
Like *string
```

- *Type:* *string

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connector_definitions#like DataSnowflakeOpenflowConnectorDefinitions#like}

---

##### `Limit`<sup>Optional</sup> <a name="Limit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsConfig.property.limit"></a>

```go
Limit DataSnowflakeOpenflowConnectorDefinitionsLimit
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimit">DataSnowflakeOpenflowConnectorDefinitionsLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connector_definitions#limit DataSnowflakeOpenflowConnectorDefinitions#limit}

---

### DataSnowflakeOpenflowConnectorDefinitionsLimit <a name="DataSnowflakeOpenflowConnectorDefinitionsLimit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimit.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowconnectordefinitions"

&datasnowflakeopenflowconnectordefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimit {
	Rows: *f64,
	From: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimit.property.rows">Rows</a></code> | <code>*f64</code> | The maximum number of rows to return. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimit.property.from">From</a></code> | <code>*string</code> | Specifies a **case-sensitive** pattern that is used to match object name. |

---

##### `Rows`<sup>Required</sup> <a name="Rows" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimit.property.rows"></a>

```go
Rows *f64
```

- *Type:* *f64

The maximum number of rows to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connector_definitions#rows DataSnowflakeOpenflowConnectorDefinitions#rows}

---

##### `From`<sup>Optional</sup> <a name="From" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimit.property.from"></a>

```go
From *string
```

- *Type:* *string

Specifies a **case-sensitive** pattern that is used to match object name.

After the first match, the limit on the number of rows will be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connector_definitions#from DataSnowflakeOpenflowConnectorDefinitions#from}

---

### DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitions <a name="DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitions" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowconnectordefinitions"

&datasnowflakeopenflowconnectordefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitions {

}
```


### DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutput <a name="DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowconnectordefinitions"

&datasnowflakeopenflowconnectordefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutput {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference <a name="DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowconnectordefinitions"

datasnowflakeopenflowconnectordefinitions.NewDataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.resetFrom">ResetFrom</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFrom` <a name="ResetFrom" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.resetFrom"></a>

```go
func ResetFrom()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.property.fromInput">FromInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.property.rowsInput">RowsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.property.from">From</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.property.rows">Rows</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimit">DataSnowflakeOpenflowConnectorDefinitionsLimit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.property.fromInput"></a>

```go
func FromInput() *string
```

- *Type:* *string

---

##### `RowsInput`<sup>Optional</sup> <a name="RowsInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.property.rowsInput"></a>

```go
func RowsInput() *f64
```

- *Type:* *f64

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.property.from"></a>

```go
func From() *string
```

- *Type:* *string

---

##### `Rows`<sup>Required</sup> <a name="Rows" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.property.rows"></a>

```go
func Rows() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimitOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeOpenflowConnectorDefinitionsLimit
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsLimit">DataSnowflakeOpenflowConnectorDefinitionsLimit</a>

---


### DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList <a name="DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowconnectordefinitions"

datasnowflakeopenflowconnectordefinitions.NewDataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.get"></a>

```go
func Get(index *f64) DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference <a name="DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowconnectordefinitions"

datasnowflakeopenflowconnectordefinitions.NewDataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList">DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitions">DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.property.showOutput"></a>

```go
func ShowOutput() DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList">DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitions
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitions">DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitions</a>

---


### DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList <a name="DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowconnectordefinitions"

datasnowflakeopenflowconnectordefinitions.NewDataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.get"></a>

```go
func Get(index *f64) DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference <a name="DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeopenflowconnectordefinitions"

datasnowflakeopenflowconnectordefinitions.NewDataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.categories">Categories</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.maxNodeCount">MaxNodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.minRuntimeNodeType">MinRuntimeNodeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.provider">Provider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutput">DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Categories`<sup>Required</sup> <a name="Categories" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.categories"></a>

```go
func Categories() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `MaxNodeCount`<sup>Required</sup> <a name="MaxNodeCount" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.maxNodeCount"></a>

```go
func MaxNodeCount() *f64
```

- *Type:* *f64

---

##### `MinRuntimeNodeType`<sup>Required</sup> <a name="MinRuntimeNodeType" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.minRuntimeNodeType"></a>

```go
func MinRuntimeNodeType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Provider`<sup>Required</sup> <a name="Provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.provider"></a>

```go
func Provider() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectorDefinitions.DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutput">DataSnowflakeOpenflowConnectorDefinitionsOpenflowConnectorDefinitionsShowOutput</a>

---



