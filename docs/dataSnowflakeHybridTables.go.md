# `dataSnowflakeHybridTables` Submodule <a name="`dataSnowflakeHybridTables` Submodule" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeHybridTables <a name="DataSnowflakeHybridTables" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables snowflake_hybrid_tables}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakehybridtables"

datasnowflakehybridtables.NewDataSnowflakeHybridTables(scope Construct, id *string, config DataSnowflakeHybridTablesConfig) DataSnowflakeHybridTables
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig">DataSnowflakeHybridTablesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig">DataSnowflakeHybridTablesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.putIn">PutIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.putLimit">PutLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetIn">ResetIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetLike">ResetLike</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetLimit">ResetLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetStartsWith">ResetStartsWith</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetWithDescribe">ResetWithDescribe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetWithIndexes">ResetWithIndexes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetWithKeys">ResetWithKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetWithParameters">ResetWithParameters</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutIn` <a name="PutIn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.putIn"></a>

```go
func PutIn(value DataSnowflakeHybridTablesIn)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.putIn.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn">DataSnowflakeHybridTablesIn</a>

---

##### `PutLimit` <a name="PutLimit" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.putLimit"></a>

```go
func PutLimit(value DataSnowflakeHybridTablesLimit)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.putLimit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit">DataSnowflakeHybridTablesLimit</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetId"></a>

```go
func ResetId()
```

##### `ResetIn` <a name="ResetIn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetIn"></a>

```go
func ResetIn()
```

##### `ResetLike` <a name="ResetLike" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetLike"></a>

```go
func ResetLike()
```

##### `ResetLimit` <a name="ResetLimit" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetLimit"></a>

```go
func ResetLimit()
```

##### `ResetStartsWith` <a name="ResetStartsWith" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetStartsWith"></a>

```go
func ResetStartsWith()
```

##### `ResetWithDescribe` <a name="ResetWithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetWithDescribe"></a>

```go
func ResetWithDescribe()
```

##### `ResetWithIndexes` <a name="ResetWithIndexes" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetWithIndexes"></a>

```go
func ResetWithIndexes()
```

##### `ResetWithKeys` <a name="ResetWithKeys" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetWithKeys"></a>

```go
func ResetWithKeys()
```

##### `ResetWithParameters` <a name="ResetWithParameters" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.resetWithParameters"></a>

```go
func ResetWithParameters()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataSnowflakeHybridTables resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakehybridtables"

datasnowflakehybridtables.DataSnowflakeHybridTables_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakehybridtables"

datasnowflakehybridtables.DataSnowflakeHybridTables_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakehybridtables"

datasnowflakehybridtables.DataSnowflakeHybridTables_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakehybridtables"

datasnowflakehybridtables.DataSnowflakeHybridTables_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataSnowflakeHybridTables resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataSnowflakeHybridTables to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataSnowflakeHybridTables that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataSnowflakeHybridTables to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.hybridTables">HybridTables</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList">DataSnowflakeHybridTablesHybridTablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.in">In</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference">DataSnowflakeHybridTablesInOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.limit">Limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference">DataSnowflakeHybridTablesLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.inInput">InInput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn">DataSnowflakeHybridTablesIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.likeInput">LikeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.limitInput">LimitInput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit">DataSnowflakeHybridTablesLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.startsWithInput">StartsWithInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withDescribeInput">WithDescribeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withIndexesInput">WithIndexesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withKeysInput">WithKeysInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withParametersInput">WithParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.like">Like</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.startsWith">StartsWith</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withDescribe">WithDescribe</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withIndexes">WithIndexes</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withKeys">WithKeys</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withParameters">WithParameters</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `HybridTables`<sup>Required</sup> <a name="HybridTables" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.hybridTables"></a>

```go
func HybridTables() DataSnowflakeHybridTablesHybridTablesList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList">DataSnowflakeHybridTablesHybridTablesList</a>

---

##### `In`<sup>Required</sup> <a name="In" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.in"></a>

```go
func In() DataSnowflakeHybridTablesInOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference">DataSnowflakeHybridTablesInOutputReference</a>

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.limit"></a>

```go
func Limit() DataSnowflakeHybridTablesLimitOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference">DataSnowflakeHybridTablesLimitOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InInput`<sup>Optional</sup> <a name="InInput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.inInput"></a>

```go
func InInput() DataSnowflakeHybridTablesIn
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn">DataSnowflakeHybridTablesIn</a>

---

##### `LikeInput`<sup>Optional</sup> <a name="LikeInput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.likeInput"></a>

```go
func LikeInput() *string
```

- *Type:* *string

---

##### `LimitInput`<sup>Optional</sup> <a name="LimitInput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.limitInput"></a>

```go
func LimitInput() DataSnowflakeHybridTablesLimit
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit">DataSnowflakeHybridTablesLimit</a>

---

##### `StartsWithInput`<sup>Optional</sup> <a name="StartsWithInput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.startsWithInput"></a>

```go
func StartsWithInput() *string
```

- *Type:* *string

---

##### `WithDescribeInput`<sup>Optional</sup> <a name="WithDescribeInput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withDescribeInput"></a>

```go
func WithDescribeInput() interface{}
```

- *Type:* interface{}

---

##### `WithIndexesInput`<sup>Optional</sup> <a name="WithIndexesInput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withIndexesInput"></a>

```go
func WithIndexesInput() interface{}
```

- *Type:* interface{}

---

##### `WithKeysInput`<sup>Optional</sup> <a name="WithKeysInput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withKeysInput"></a>

```go
func WithKeysInput() interface{}
```

- *Type:* interface{}

---

##### `WithParametersInput`<sup>Optional</sup> <a name="WithParametersInput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withParametersInput"></a>

```go
func WithParametersInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Like`<sup>Required</sup> <a name="Like" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.like"></a>

```go
func Like() *string
```

- *Type:* *string

---

##### `StartsWith`<sup>Required</sup> <a name="StartsWith" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.startsWith"></a>

```go
func StartsWith() *string
```

- *Type:* *string

---

##### `WithDescribe`<sup>Required</sup> <a name="WithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withDescribe"></a>

```go
func WithDescribe() interface{}
```

- *Type:* interface{}

---

##### `WithIndexes`<sup>Required</sup> <a name="WithIndexes" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withIndexes"></a>

```go
func WithIndexes() interface{}
```

- *Type:* interface{}

---

##### `WithKeys`<sup>Required</sup> <a name="WithKeys" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withKeys"></a>

```go
func WithKeys() interface{}
```

- *Type:* interface{}

---

##### `WithParameters`<sup>Required</sup> <a name="WithParameters" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.withParameters"></a>

```go
func WithParameters() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTables.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeHybridTablesConfig <a name="DataSnowflakeHybridTablesConfig" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakehybridtables"

&datasnowflakehybridtables.DataSnowflakeHybridTablesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	In: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn,
	Like: *string,
	Limit: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit,
	StartsWith: *string,
	WithDescribe: interface{},
	WithIndexes: interface{},
	WithKeys: interface{},
	WithParameters: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#id DataSnowflakeHybridTables#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.in">In</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn">DataSnowflakeHybridTablesIn</a></code> | in block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.like">Like</a></code> | <code>*string</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.limit">Limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit">DataSnowflakeHybridTablesLimit</a></code> | limit block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.startsWith">StartsWith</a></code> | <code>*string</code> | Filters the output with **case-sensitive** characters indicating the beginning of the object name. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.withDescribe">WithDescribe</a></code> | <code>interface{}</code> | (Default: `true`) Runs DESC TABLE for each hybrid table returned by SHOW HYBRID TABLES. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.withIndexes">WithIndexes</a></code> | <code>interface{}</code> | (Default: `false`) Runs SHOW INDEXES for each hybrid table returned by SHOW HYBRID TABLES. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.withKeys">WithKeys</a></code> | <code>interface{}</code> | (Default: `false`) Runs SHOW PRIMARY KEYS, SHOW UNIQUE KEYS, and SHOW IMPORTED KEYS for each hybrid table returned by SHOW HYBRID TABLES. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.withParameters">WithParameters</a></code> | <code>interface{}</code> | (Default: `true`) Runs SHOW PARAMETERS FOR TABLE for each hybrid table returned by SHOW HYBRID TABLES. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#id DataSnowflakeHybridTables#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `In`<sup>Optional</sup> <a name="In" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.in"></a>

```go
In DataSnowflakeHybridTablesIn
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn">DataSnowflakeHybridTablesIn</a>

in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#in DataSnowflakeHybridTables#in}

---

##### `Like`<sup>Optional</sup> <a name="Like" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.like"></a>

```go
Like *string
```

- *Type:* *string

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#like DataSnowflakeHybridTables#like}

---

##### `Limit`<sup>Optional</sup> <a name="Limit" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.limit"></a>

```go
Limit DataSnowflakeHybridTablesLimit
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit">DataSnowflakeHybridTablesLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#limit DataSnowflakeHybridTables#limit}

---

##### `StartsWith`<sup>Optional</sup> <a name="StartsWith" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.startsWith"></a>

```go
StartsWith *string
```

- *Type:* *string

Filters the output with **case-sensitive** characters indicating the beginning of the object name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#starts_with DataSnowflakeHybridTables#starts_with}

---

##### `WithDescribe`<sup>Optional</sup> <a name="WithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.withDescribe"></a>

```go
WithDescribe interface{}
```

- *Type:* interface{}

(Default: `true`) Runs DESC TABLE for each hybrid table returned by SHOW HYBRID TABLES.

The output of describe is saved to the describe_output field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#with_describe DataSnowflakeHybridTables#with_describe}

---

##### `WithIndexes`<sup>Optional</sup> <a name="WithIndexes" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.withIndexes"></a>

```go
WithIndexes interface{}
```

- *Type:* interface{}

(Default: `false`) Runs SHOW INDEXES for each hybrid table returned by SHOW HYBRID TABLES.

The output is saved to the show_indexes field. By default this value is set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#with_indexes DataSnowflakeHybridTables#with_indexes}

---

##### `WithKeys`<sup>Optional</sup> <a name="WithKeys" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.withKeys"></a>

```go
WithKeys interface{}
```

- *Type:* interface{}

(Default: `false`) Runs SHOW PRIMARY KEYS, SHOW UNIQUE KEYS, and SHOW IMPORTED KEYS for each hybrid table returned by SHOW HYBRID TABLES.

The merged constraints are saved to the show_keys_output field, grouped by constraint name and ordered by kind, then by column names. By default this value is set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#with_keys DataSnowflakeHybridTables#with_keys}

---

##### `WithParameters`<sup>Optional</sup> <a name="WithParameters" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesConfig.property.withParameters"></a>

```go
WithParameters interface{}
```

- *Type:* interface{}

(Default: `true`) Runs SHOW PARAMETERS FOR TABLE for each hybrid table returned by SHOW HYBRID TABLES.

The output is saved to the parameters field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#with_parameters DataSnowflakeHybridTables#with_parameters}

---

### DataSnowflakeHybridTablesHybridTables <a name="DataSnowflakeHybridTablesHybridTables" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTables.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakehybridtables"

&datasnowflakehybridtables.DataSnowflakeHybridTablesHybridTables {

}
```


### DataSnowflakeHybridTablesHybridTablesDescribeOutput <a name="DataSnowflakeHybridTablesHybridTablesDescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakehybridtables"

&datasnowflakehybridtables.DataSnowflakeHybridTablesHybridTablesDescribeOutput {

}
```


### DataSnowflakeHybridTablesHybridTablesParameters <a name="DataSnowflakeHybridTablesHybridTablesParameters" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakehybridtables"

&datasnowflakehybridtables.DataSnowflakeHybridTablesHybridTablesParameters {

}
```


### DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDays <a name="DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDays" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDays"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDays.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakehybridtables"

&datasnowflakehybridtables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDays {

}
```


### DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDays <a name="DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDays" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDays"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDays.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakehybridtables"

&datasnowflakehybridtables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDays {

}
```


### DataSnowflakeHybridTablesHybridTablesShowIndexes <a name="DataSnowflakeHybridTablesHybridTablesShowIndexes" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakehybridtables"

&datasnowflakehybridtables.DataSnowflakeHybridTablesHybridTablesShowIndexes {

}
```


### DataSnowflakeHybridTablesHybridTablesShowKeysOutput <a name="DataSnowflakeHybridTablesHybridTablesShowKeysOutput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakehybridtables"

&datasnowflakehybridtables.DataSnowflakeHybridTablesHybridTablesShowKeysOutput {

}
```


### DataSnowflakeHybridTablesHybridTablesShowOutput <a name="DataSnowflakeHybridTablesHybridTablesShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakehybridtables"

&datasnowflakehybridtables.DataSnowflakeHybridTablesHybridTablesShowOutput {

}
```


### DataSnowflakeHybridTablesIn <a name="DataSnowflakeHybridTablesIn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakehybridtables"

&datasnowflakehybridtables.DataSnowflakeHybridTablesIn {
	Account: interface{},
	Database: *string,
	Schema: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn.property.account">Account</a></code> | <code>interface{}</code> | Returns records for the entire account. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn.property.database">Database</a></code> | <code>*string</code> | Returns records for the current database in use or for a specified database. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn.property.schema">Schema</a></code> | <code>*string</code> | Returns records for the current schema in use or a specified schema. Use fully qualified name. |

---

##### `Account`<sup>Optional</sup> <a name="Account" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn.property.account"></a>

```go
Account interface{}
```

- *Type:* interface{}

Returns records for the entire account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#account DataSnowflakeHybridTables#account}

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn.property.database"></a>

```go
Database *string
```

- *Type:* *string

Returns records for the current database in use or for a specified database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#database DataSnowflakeHybridTables#database}

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn.property.schema"></a>

```go
Schema *string
```

- *Type:* *string

Returns records for the current schema in use or a specified schema. Use fully qualified name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#schema DataSnowflakeHybridTables#schema}

---

### DataSnowflakeHybridTablesLimit <a name="DataSnowflakeHybridTablesLimit" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakehybridtables"

&datasnowflakehybridtables.DataSnowflakeHybridTablesLimit {
	Rows: *f64,
	From: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit.property.rows">Rows</a></code> | <code>*f64</code> | The maximum number of rows to return. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit.property.from">From</a></code> | <code>*string</code> | Specifies a **case-sensitive** pattern that is used to match object name. |

---

##### `Rows`<sup>Required</sup> <a name="Rows" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit.property.rows"></a>

```go
Rows *f64
```

- *Type:* *f64

The maximum number of rows to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#rows DataSnowflakeHybridTables#rows}

---

##### `From`<sup>Optional</sup> <a name="From" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit.property.from"></a>

```go
From *string
```

- *Type:* *string

Specifies a **case-sensitive** pattern that is used to match object name.

After the first match, the limit on the number of rows will be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/hybrid_tables#from DataSnowflakeHybridTables#from}

---

## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeHybridTablesHybridTablesDescribeOutputList <a name="DataSnowflakeHybridTablesHybridTablesDescribeOutputList" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakehybridtables"

datasnowflakehybridtables.NewDataSnowflakeHybridTablesHybridTablesDescribeOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataSnowflakeHybridTablesHybridTablesDescribeOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.get"></a>

```go
func Get(index *f64) DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference <a name="DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakehybridtables"

datasnowflakehybridtables.NewDataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.check">Check</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.collation">Collation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.isNullable">IsNullable</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.policyName">PolicyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.primaryKey">PrimaryKey</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.privacyDomain">PrivacyDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.schemaEvolutionRecord">SchemaEvolutionRecord</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.uniqueKey">UniqueKey</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutput">DataSnowflakeHybridTablesHybridTablesDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Check`<sup>Required</sup> <a name="Check" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.check"></a>

```go
func Check() *string
```

- *Type:* *string

---

##### `Collation`<sup>Required</sup> <a name="Collation" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.collation"></a>

```go
func Collation() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `IsNullable`<sup>Required</sup> <a name="IsNullable" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.isNullable"></a>

```go
func IsNullable() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PolicyName`<sup>Required</sup> <a name="PolicyName" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.policyName"></a>

```go
func PolicyName() *string
```

- *Type:* *string

---

##### `PrimaryKey`<sup>Required</sup> <a name="PrimaryKey" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.primaryKey"></a>

```go
func PrimaryKey() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `PrivacyDomain`<sup>Required</sup> <a name="PrivacyDomain" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.privacyDomain"></a>

```go
func PrivacyDomain() *string
```

- *Type:* *string

---

##### `SchemaEvolutionRecord`<sup>Required</sup> <a name="SchemaEvolutionRecord" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.schemaEvolutionRecord"></a>

```go
func SchemaEvolutionRecord() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UniqueKey`<sup>Required</sup> <a name="UniqueKey" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.uniqueKey"></a>

```go
func UniqueKey() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeHybridTablesHybridTablesDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutput">DataSnowflakeHybridTablesHybridTablesDescribeOutput</a>

---


### DataSnowflakeHybridTablesHybridTablesList <a name="DataSnowflakeHybridTablesHybridTablesList" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakehybridtables"

datasnowflakehybridtables.NewDataSnowflakeHybridTablesHybridTablesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataSnowflakeHybridTablesHybridTablesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.get"></a>

```go
func Get(index *f64) DataSnowflakeHybridTablesHybridTablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataSnowflakeHybridTablesHybridTablesOutputReference <a name="DataSnowflakeHybridTablesHybridTablesOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakehybridtables"

datasnowflakehybridtables.NewDataSnowflakeHybridTablesHybridTablesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataSnowflakeHybridTablesHybridTablesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList">DataSnowflakeHybridTablesHybridTablesDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList">DataSnowflakeHybridTablesHybridTablesParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.showIndexes">ShowIndexes</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList">DataSnowflakeHybridTablesHybridTablesShowIndexesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.showKeysOutput">ShowKeysOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList">DataSnowflakeHybridTablesHybridTablesShowKeysOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList">DataSnowflakeHybridTablesHybridTablesShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTables">DataSnowflakeHybridTablesHybridTables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.describeOutput"></a>

```go
func DescribeOutput() DataSnowflakeHybridTablesHybridTablesDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesDescribeOutputList">DataSnowflakeHybridTablesHybridTablesDescribeOutputList</a>

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.parameters"></a>

```go
func Parameters() DataSnowflakeHybridTablesHybridTablesParametersList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList">DataSnowflakeHybridTablesHybridTablesParametersList</a>

---

##### `ShowIndexes`<sup>Required</sup> <a name="ShowIndexes" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.showIndexes"></a>

```go
func ShowIndexes() DataSnowflakeHybridTablesHybridTablesShowIndexesList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList">DataSnowflakeHybridTablesHybridTablesShowIndexesList</a>

---

##### `ShowKeysOutput`<sup>Required</sup> <a name="ShowKeysOutput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.showKeysOutput"></a>

```go
func ShowKeysOutput() DataSnowflakeHybridTablesHybridTablesShowKeysOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList">DataSnowflakeHybridTablesHybridTablesShowKeysOutputList</a>

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.showOutput"></a>

```go
func ShowOutput() DataSnowflakeHybridTablesHybridTablesShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList">DataSnowflakeHybridTablesHybridTablesShowOutputList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeHybridTablesHybridTables
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTables">DataSnowflakeHybridTablesHybridTables</a>

---


### DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList <a name="DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakehybridtables"

datasnowflakehybridtables.NewDataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.get"></a>

```go
func Get(index *f64) DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference <a name="DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakehybridtables"

datasnowflakehybridtables.NewDataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.level">Level</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDays">DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDays</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.level"></a>

```go
func Level() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDays
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDays">DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDays</a>

---


### DataSnowflakeHybridTablesHybridTablesParametersList <a name="DataSnowflakeHybridTablesHybridTablesParametersList" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakehybridtables"

datasnowflakehybridtables.NewDataSnowflakeHybridTablesHybridTablesParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataSnowflakeHybridTablesHybridTablesParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.get"></a>

```go
func Get(index *f64) DataSnowflakeHybridTablesHybridTablesParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList <a name="DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakehybridtables"

datasnowflakehybridtables.NewDataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.get"></a>

```go
func Get(index *f64) DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference <a name="DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakehybridtables"

datasnowflakehybridtables.NewDataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.level">Level</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDays">DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDays</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.level"></a>

```go
func Level() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDays
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDays">DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDays</a>

---


### DataSnowflakeHybridTablesHybridTablesParametersOutputReference <a name="DataSnowflakeHybridTablesHybridTablesParametersOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakehybridtables"

datasnowflakehybridtables.NewDataSnowflakeHybridTablesHybridTablesParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataSnowflakeHybridTablesHybridTablesParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.property.dataRetentionTimeInDays">DataRetentionTimeInDays</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList">DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.property.maxDataExtensionTimeInDays">MaxDataExtensionTimeInDays</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList">DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParameters">DataSnowflakeHybridTablesHybridTablesParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataRetentionTimeInDays`<sup>Required</sup> <a name="DataRetentionTimeInDays" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.property.dataRetentionTimeInDays"></a>

```go
func DataRetentionTimeInDays() DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList">DataSnowflakeHybridTablesHybridTablesParametersDataRetentionTimeInDaysList</a>

---

##### `MaxDataExtensionTimeInDays`<sup>Required</sup> <a name="MaxDataExtensionTimeInDays" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.property.maxDataExtensionTimeInDays"></a>

```go
func MaxDataExtensionTimeInDays() DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList">DataSnowflakeHybridTablesHybridTablesParametersMaxDataExtensionTimeInDaysList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeHybridTablesHybridTablesParameters
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesParameters">DataSnowflakeHybridTablesHybridTablesParameters</a>

---


### DataSnowflakeHybridTablesHybridTablesShowIndexesList <a name="DataSnowflakeHybridTablesHybridTablesShowIndexesList" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakehybridtables"

datasnowflakehybridtables.NewDataSnowflakeHybridTablesHybridTablesShowIndexesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataSnowflakeHybridTablesHybridTablesShowIndexesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.get"></a>

```go
func Get(index *f64) DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference <a name="DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakehybridtables"

datasnowflakehybridtables.NewDataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.columns">Columns</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.includedColumns">IncludedColumns</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.isUnique">IsUnique</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.ownerRoleType">OwnerRoleType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexes">DataSnowflakeHybridTablesHybridTablesShowIndexes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.columns"></a>

```go
func Columns() *string
```

- *Type:* *string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `IncludedColumns`<sup>Required</sup> <a name="IncludedColumns" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.includedColumns"></a>

```go
func IncludedColumns() *string
```

- *Type:* *string

---

##### `IsUnique`<sup>Required</sup> <a name="IsUnique" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.isUnique"></a>

```go
func IsUnique() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `OwnerRoleType`<sup>Required</sup> <a name="OwnerRoleType" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.ownerRoleType"></a>

```go
func OwnerRoleType() *string
```

- *Type:* *string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeHybridTablesHybridTablesShowIndexes
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowIndexes">DataSnowflakeHybridTablesHybridTablesShowIndexes</a>

---


### DataSnowflakeHybridTablesHybridTablesShowKeysOutputList <a name="DataSnowflakeHybridTablesHybridTablesShowKeysOutputList" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakehybridtables"

datasnowflakehybridtables.NewDataSnowflakeHybridTablesHybridTablesShowKeysOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataSnowflakeHybridTablesHybridTablesShowKeysOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.get"></a>

```go
func Get(index *f64) DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference <a name="DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakehybridtables"

datasnowflakehybridtables.NewDataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.columns">Columns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.deleteRule">DeleteRule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.referencedColumns">ReferencedColumns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.referencedTable">ReferencedTable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.updateRule">UpdateRule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutput">DataSnowflakeHybridTablesHybridTablesShowKeysOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.columns"></a>

```go
func Columns() *[]*string
```

- *Type:* *[]*string

---

##### `DeleteRule`<sup>Required</sup> <a name="DeleteRule" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.deleteRule"></a>

```go
func DeleteRule() *string
```

- *Type:* *string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ReferencedColumns`<sup>Required</sup> <a name="ReferencedColumns" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.referencedColumns"></a>

```go
func ReferencedColumns() *[]*string
```

- *Type:* *[]*string

---

##### `ReferencedTable`<sup>Required</sup> <a name="ReferencedTable" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.referencedTable"></a>

```go
func ReferencedTable() *string
```

- *Type:* *string

---

##### `UpdateRule`<sup>Required</sup> <a name="UpdateRule" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.updateRule"></a>

```go
func UpdateRule() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeHybridTablesHybridTablesShowKeysOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowKeysOutput">DataSnowflakeHybridTablesHybridTablesShowKeysOutput</a>

---


### DataSnowflakeHybridTablesHybridTablesShowOutputList <a name="DataSnowflakeHybridTablesHybridTablesShowOutputList" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakehybridtables"

datasnowflakehybridtables.NewDataSnowflakeHybridTablesHybridTablesShowOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataSnowflakeHybridTablesHybridTablesShowOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.get"></a>

```go
func Get(index *f64) DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference <a name="DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakehybridtables"

datasnowflakehybridtables.NewDataSnowflakeHybridTablesHybridTablesShowOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.bytes">Bytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.ownerRoleType">OwnerRoleType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.rows">Rows</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutput">DataSnowflakeHybridTablesHybridTablesShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bytes`<sup>Required</sup> <a name="Bytes" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.bytes"></a>

```go
func Bytes() *f64
```

- *Type:* *f64

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `OwnerRoleType`<sup>Required</sup> <a name="OwnerRoleType" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.ownerRoleType"></a>

```go
func OwnerRoleType() *string
```

- *Type:* *string

---

##### `Rows`<sup>Required</sup> <a name="Rows" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.rows"></a>

```go
func Rows() *f64
```

- *Type:* *f64

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeHybridTablesHybridTablesShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesHybridTablesShowOutput">DataSnowflakeHybridTablesHybridTablesShowOutput</a>

---


### DataSnowflakeHybridTablesInOutputReference <a name="DataSnowflakeHybridTablesInOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakehybridtables"

datasnowflakehybridtables.NewDataSnowflakeHybridTablesInOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataSnowflakeHybridTablesInOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.resetAccount">ResetAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.resetSchema">ResetSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccount` <a name="ResetAccount" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.resetAccount"></a>

```go
func ResetAccount()
```

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.resetDatabase"></a>

```go
func ResetDatabase()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.resetSchema"></a>

```go
func ResetSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.accountInput">AccountInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.schemaInput">SchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.account">Account</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn">DataSnowflakeHybridTablesIn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountInput`<sup>Optional</sup> <a name="AccountInput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.accountInput"></a>

```go
func AccountInput() interface{}
```

- *Type:* interface{}

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.schemaInput"></a>

```go
func SchemaInput() *string
```

- *Type:* *string

---

##### `Account`<sup>Required</sup> <a name="Account" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.account"></a>

```go
func Account() interface{}
```

- *Type:* interface{}

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesInOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeHybridTablesIn
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesIn">DataSnowflakeHybridTablesIn</a>

---


### DataSnowflakeHybridTablesLimitOutputReference <a name="DataSnowflakeHybridTablesLimitOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakehybridtables"

datasnowflakehybridtables.NewDataSnowflakeHybridTablesLimitOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataSnowflakeHybridTablesLimitOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.resetFrom">ResetFrom</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFrom` <a name="ResetFrom" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.resetFrom"></a>

```go
func ResetFrom()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.fromInput">FromInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.rowsInput">RowsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.from">From</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.rows">Rows</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit">DataSnowflakeHybridTablesLimit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.fromInput"></a>

```go
func FromInput() *string
```

- *Type:* *string

---

##### `RowsInput`<sup>Optional</sup> <a name="RowsInput" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.rowsInput"></a>

```go
func RowsInput() *f64
```

- *Type:* *f64

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.from"></a>

```go
func From() *string
```

- *Type:* *string

---

##### `Rows`<sup>Required</sup> <a name="Rows" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.rows"></a>

```go
func Rows() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimitOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeHybridTablesLimit
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeHybridTables.DataSnowflakeHybridTablesLimit">DataSnowflakeHybridTablesLimit</a>

---



