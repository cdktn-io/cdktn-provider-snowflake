# `dataSnowflakePostgresMirrors` Submodule <a name="`dataSnowflakePostgresMirrors` Submodule" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakePostgresMirrors <a name="DataSnowflakePostgresMirrors" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/data-sources/postgres_mirrors snowflake_postgres_mirrors}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v19/datasnowflakepostgresmirrors"

datasnowflakepostgresmirrors.NewDataSnowflakePostgresMirrors(scope Construct, id *string, config DataSnowflakePostgresMirrorsConfig) DataSnowflakePostgresMirrors
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig">DataSnowflakePostgresMirrorsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig">DataSnowflakePostgresMirrorsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.resetPostgresInstance">ResetPostgresInstance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.resetWithDescribe">ResetWithDescribe</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.resetId"></a>

```go
func ResetId()
```

##### `ResetPostgresInstance` <a name="ResetPostgresInstance" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.resetPostgresInstance"></a>

```go
func ResetPostgresInstance()
```

##### `ResetWithDescribe` <a name="ResetWithDescribe" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.resetWithDescribe"></a>

```go
func ResetWithDescribe()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataSnowflakePostgresMirrors resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v19/datasnowflakepostgresmirrors"

datasnowflakepostgresmirrors.DataSnowflakePostgresMirrors_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v19/datasnowflakepostgresmirrors"

datasnowflakepostgresmirrors.DataSnowflakePostgresMirrors_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v19/datasnowflakepostgresmirrors"

datasnowflakepostgresmirrors.DataSnowflakePostgresMirrors_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v19/datasnowflakepostgresmirrors"

datasnowflakepostgresmirrors.DataSnowflakePostgresMirrors_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataSnowflakePostgresMirrors resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataSnowflakePostgresMirrors to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataSnowflakePostgresMirrors that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/data-sources/postgres_mirrors#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataSnowflakePostgresMirrors to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.postgresMirrors">PostgresMirrors</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList">DataSnowflakePostgresMirrorsPostgresMirrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.postgresInstanceInput">PostgresInstanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.withDescribeInput">WithDescribeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.postgresInstance">PostgresInstance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.withDescribe">WithDescribe</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `PostgresMirrors`<sup>Required</sup> <a name="PostgresMirrors" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.postgresMirrors"></a>

```go
func PostgresMirrors() DataSnowflakePostgresMirrorsPostgresMirrorsList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList">DataSnowflakePostgresMirrorsPostgresMirrorsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PostgresInstanceInput`<sup>Optional</sup> <a name="PostgresInstanceInput" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.postgresInstanceInput"></a>

```go
func PostgresInstanceInput() *string
```

- *Type:* *string

---

##### `WithDescribeInput`<sup>Optional</sup> <a name="WithDescribeInput" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.withDescribeInput"></a>

```go
func WithDescribeInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PostgresInstance`<sup>Required</sup> <a name="PostgresInstance" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.postgresInstance"></a>

```go
func PostgresInstance() *string
```

- *Type:* *string

---

##### `WithDescribe`<sup>Required</sup> <a name="WithDescribe" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.withDescribe"></a>

```go
func WithDescribe() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrors.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakePostgresMirrorsConfig <a name="DataSnowflakePostgresMirrorsConfig" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v19/datasnowflakepostgresmirrors"

&datasnowflakepostgresmirrors.DataSnowflakePostgresMirrorsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	PostgresInstance: *string,
	WithDescribe: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/data-sources/postgres_mirrors#id DataSnowflakePostgresMirrors#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.postgresInstance">PostgresInstance</a></code> | <code>*string</code> | Lists only the mirrors that replicate from this Postgres instance. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.withDescribe">WithDescribe</a></code> | <code>interface{}</code> | (Default: `true`) Runs DESCRIBE_MIRROR for each mirror returned by LIST_MIRRORS. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/data-sources/postgres_mirrors#id DataSnowflakePostgresMirrors#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PostgresInstance`<sup>Optional</sup> <a name="PostgresInstance" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.postgresInstance"></a>

```go
PostgresInstance *string
```

- *Type:* *string

Lists only the mirrors that replicate from this Postgres instance.

The name is case-sensitive. A quoted identifier, such as the instance's `fully_qualified_name`, is also accepted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/data-sources/postgres_mirrors#postgres_instance DataSnowflakePostgresMirrors#postgres_instance}

---

##### `WithDescribe`<sup>Optional</sup> <a name="WithDescribe" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsConfig.property.withDescribe"></a>

```go
WithDescribe interface{}
```

- *Type:* interface{}

(Default: `true`) Runs DESCRIBE_MIRROR for each mirror returned by LIST_MIRRORS.

The output of describe is saved to the describe_output field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/data-sources/postgres_mirrors#with_describe DataSnowflakePostgresMirrors#with_describe}

---

### DataSnowflakePostgresMirrorsPostgresMirrors <a name="DataSnowflakePostgresMirrorsPostgresMirrors" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrors.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v19/datasnowflakepostgresmirrors"

&datasnowflakepostgresmirrors.DataSnowflakePostgresMirrorsPostgresMirrors {

}
```


### DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutput <a name="DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v19/datasnowflakepostgresmirrors"

&datasnowflakepostgresmirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutput {

}
```


### DataSnowflakePostgresMirrorsPostgresMirrorsShowOutput <a name="DataSnowflakePostgresMirrorsPostgresMirrorsShowOutput" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v19/datasnowflakepostgresmirrors"

&datasnowflakepostgresmirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutput {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList <a name="DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v19/datasnowflakepostgresmirrors"

datasnowflakepostgresmirrors.NewDataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.get"></a>

```go
func Get(index *f64) DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference <a name="DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v19/datasnowflakepostgresmirrors"

datasnowflakepostgresmirrors.NewDataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.applyLagBytes">ApplyLagBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.applyLagOperations">ApplyLagOperations</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.applyLagSeconds">ApplyLagSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.catalogIntegrationName">CatalogIntegrationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.errorMessage">ErrorMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.externalVolume">ExternalVolume</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.feedOnly">FeedOnly</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.lastAppliedCommitLsn">LastAppliedCommitLsn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.lastAppliedCommitTime">LastAppliedCommitTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.lastApplyTime">LastApplyTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.lastOperationId">LastOperationId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.lastOperationTime">LastOperationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.postgresDatabase">PostgresDatabase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.postgresInstance">PostgresInstance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.postgresSchemas">PostgresSchemas</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.postgresStatus">PostgresStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.postgresTables">PostgresTables</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.recentQueryDurations">RecentQueryDurations</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.refreshInterval">RefreshInterval</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.targetDatabase">TargetDatabase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.targetTableType">TargetTableType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.warehouse">Warehouse</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutput">DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplyLagBytes`<sup>Required</sup> <a name="ApplyLagBytes" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.applyLagBytes"></a>

```go
func ApplyLagBytes() *f64
```

- *Type:* *f64

---

##### `ApplyLagOperations`<sup>Required</sup> <a name="ApplyLagOperations" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.applyLagOperations"></a>

```go
func ApplyLagOperations() *f64
```

- *Type:* *f64

---

##### `ApplyLagSeconds`<sup>Required</sup> <a name="ApplyLagSeconds" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.applyLagSeconds"></a>

```go
func ApplyLagSeconds() *f64
```

- *Type:* *f64

---

##### `CatalogIntegrationName`<sup>Required</sup> <a name="CatalogIntegrationName" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.catalogIntegrationName"></a>

```go
func CatalogIntegrationName() *string
```

- *Type:* *string

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.errorMessage"></a>

```go
func ErrorMessage() *string
```

- *Type:* *string

---

##### `ExternalVolume`<sup>Required</sup> <a name="ExternalVolume" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.externalVolume"></a>

```go
func ExternalVolume() *string
```

- *Type:* *string

---

##### `FeedOnly`<sup>Required</sup> <a name="FeedOnly" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.feedOnly"></a>

```go
func FeedOnly() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `LastAppliedCommitLsn`<sup>Required</sup> <a name="LastAppliedCommitLsn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.lastAppliedCommitLsn"></a>

```go
func LastAppliedCommitLsn() *string
```

- *Type:* *string

---

##### `LastAppliedCommitTime`<sup>Required</sup> <a name="LastAppliedCommitTime" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.lastAppliedCommitTime"></a>

```go
func LastAppliedCommitTime() *string
```

- *Type:* *string

---

##### `LastApplyTime`<sup>Required</sup> <a name="LastApplyTime" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.lastApplyTime"></a>

```go
func LastApplyTime() *string
```

- *Type:* *string

---

##### `LastOperationId`<sup>Required</sup> <a name="LastOperationId" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.lastOperationId"></a>

```go
func LastOperationId() *f64
```

- *Type:* *f64

---

##### `LastOperationTime`<sup>Required</sup> <a name="LastOperationTime" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.lastOperationTime"></a>

```go
func LastOperationTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PostgresDatabase`<sup>Required</sup> <a name="PostgresDatabase" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.postgresDatabase"></a>

```go
func PostgresDatabase() *string
```

- *Type:* *string

---

##### `PostgresInstance`<sup>Required</sup> <a name="PostgresInstance" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.postgresInstance"></a>

```go
func PostgresInstance() *string
```

- *Type:* *string

---

##### `PostgresSchemas`<sup>Required</sup> <a name="PostgresSchemas" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.postgresSchemas"></a>

```go
func PostgresSchemas() *[]*string
```

- *Type:* *[]*string

---

##### `PostgresStatus`<sup>Required</sup> <a name="PostgresStatus" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.postgresStatus"></a>

```go
func PostgresStatus() *string
```

- *Type:* *string

---

##### `PostgresTables`<sup>Required</sup> <a name="PostgresTables" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.postgresTables"></a>

```go
func PostgresTables() *[]*string
```

- *Type:* *[]*string

---

##### `RecentQueryDurations`<sup>Required</sup> <a name="RecentQueryDurations" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.recentQueryDurations"></a>

```go
func RecentQueryDurations() *string
```

- *Type:* *string

---

##### `RefreshInterval`<sup>Required</sup> <a name="RefreshInterval" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.refreshInterval"></a>

```go
func RefreshInterval() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `TargetDatabase`<sup>Required</sup> <a name="TargetDatabase" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.targetDatabase"></a>

```go
func TargetDatabase() *string
```

- *Type:* *string

---

##### `TargetTableType`<sup>Required</sup> <a name="TargetTableType" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.targetTableType"></a>

```go
func TargetTableType() *string
```

- *Type:* *string

---

##### `Warehouse`<sup>Required</sup> <a name="Warehouse" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.warehouse"></a>

```go
func Warehouse() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutput">DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutput</a>

---


### DataSnowflakePostgresMirrorsPostgresMirrorsList <a name="DataSnowflakePostgresMirrorsPostgresMirrorsList" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v19/datasnowflakepostgresmirrors"

datasnowflakepostgresmirrors.NewDataSnowflakePostgresMirrorsPostgresMirrorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataSnowflakePostgresMirrorsPostgresMirrorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.get"></a>

```go
func Get(index *f64) DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference <a name="DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v19/datasnowflakepostgresmirrors"

datasnowflakepostgresmirrors.NewDataSnowflakePostgresMirrorsPostgresMirrorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList">DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList">DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrors">DataSnowflakePostgresMirrorsPostgresMirrors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.property.describeOutput"></a>

```go
func DescribeOutput() DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList">DataSnowflakePostgresMirrorsPostgresMirrorsDescribeOutputList</a>

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.property.showOutput"></a>

```go
func ShowOutput() DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList">DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakePostgresMirrorsPostgresMirrors
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrors">DataSnowflakePostgresMirrorsPostgresMirrors</a>

---


### DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList <a name="DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v19/datasnowflakepostgresmirrors"

datasnowflakepostgresmirrors.NewDataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.get"></a>

```go
func Get(index *f64) DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference <a name="DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v19/datasnowflakepostgresmirrors"

datasnowflakepostgresmirrors.NewDataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.errorMessage">ErrorMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.initialSnapshotTablesRemaining">InitialSnapshotTablesRemaining</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.lastApplyTime">LastApplyTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.lastOperationTime">LastOperationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.postgresDatabase">PostgresDatabase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.postgresInstance">PostgresInstance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.refreshInterval">RefreshInterval</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.tableCount">TableCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.targetDatabase">TargetDatabase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutput">DataSnowflakePostgresMirrorsPostgresMirrorsShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.errorMessage"></a>

```go
func ErrorMessage() *string
```

- *Type:* *string

---

##### `InitialSnapshotTablesRemaining`<sup>Required</sup> <a name="InitialSnapshotTablesRemaining" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.initialSnapshotTablesRemaining"></a>

```go
func InitialSnapshotTablesRemaining() *f64
```

- *Type:* *f64

---

##### `LastApplyTime`<sup>Required</sup> <a name="LastApplyTime" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.lastApplyTime"></a>

```go
func LastApplyTime() *string
```

- *Type:* *string

---

##### `LastOperationTime`<sup>Required</sup> <a name="LastOperationTime" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.lastOperationTime"></a>

```go
func LastOperationTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PostgresDatabase`<sup>Required</sup> <a name="PostgresDatabase" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.postgresDatabase"></a>

```go
func PostgresDatabase() *string
```

- *Type:* *string

---

##### `PostgresInstance`<sup>Required</sup> <a name="PostgresInstance" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.postgresInstance"></a>

```go
func PostgresInstance() *string
```

- *Type:* *string

---

##### `RefreshInterval`<sup>Required</sup> <a name="RefreshInterval" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.refreshInterval"></a>

```go
func RefreshInterval() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `TableCount`<sup>Required</sup> <a name="TableCount" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.tableCount"></a>

```go
func TableCount() *f64
```

- *Type:* *f64

---

##### `TargetDatabase`<sup>Required</sup> <a name="TargetDatabase" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.targetDatabase"></a>

```go
func TargetDatabase() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakePostgresMirrorsPostgresMirrorsShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakePostgresMirrors.DataSnowflakePostgresMirrorsPostgresMirrorsShowOutput">DataSnowflakePostgresMirrorsPostgresMirrorsShowOutput</a>

---



