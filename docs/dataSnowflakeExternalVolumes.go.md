# `dataSnowflakeExternalVolumes` Submodule <a name="`dataSnowflakeExternalVolumes` Submodule" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeExternalVolumes <a name="DataSnowflakeExternalVolumes" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/data-sources/external_volumes snowflake_external_volumes}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/datasnowflakeexternalvolumes"

datasnowflakeexternalvolumes.NewDataSnowflakeExternalVolumes(scope Construct, id *string, config DataSnowflakeExternalVolumesConfig) DataSnowflakeExternalVolumes
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig">DataSnowflakeExternalVolumesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig">DataSnowflakeExternalVolumesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.resetLike">ResetLike</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.resetWithDescribe">ResetWithDescribe</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.resetId"></a>

```go
func ResetId()
```

##### `ResetLike` <a name="ResetLike" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.resetLike"></a>

```go
func ResetLike()
```

##### `ResetWithDescribe` <a name="ResetWithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.resetWithDescribe"></a>

```go
func ResetWithDescribe()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataSnowflakeExternalVolumes resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/datasnowflakeexternalvolumes"

datasnowflakeexternalvolumes.DataSnowflakeExternalVolumes_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/datasnowflakeexternalvolumes"

datasnowflakeexternalvolumes.DataSnowflakeExternalVolumes_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/datasnowflakeexternalvolumes"

datasnowflakeexternalvolumes.DataSnowflakeExternalVolumes_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/datasnowflakeexternalvolumes"

datasnowflakeexternalvolumes.DataSnowflakeExternalVolumes_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataSnowflakeExternalVolumes resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataSnowflakeExternalVolumes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataSnowflakeExternalVolumes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/data-sources/external_volumes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataSnowflakeExternalVolumes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.externalVolumes">ExternalVolumes</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList">DataSnowflakeExternalVolumesExternalVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.likeInput">LikeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.withDescribeInput">WithDescribeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.like">Like</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.withDescribe">WithDescribe</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ExternalVolumes`<sup>Required</sup> <a name="ExternalVolumes" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.externalVolumes"></a>

```go
func ExternalVolumes() DataSnowflakeExternalVolumesExternalVolumesList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList">DataSnowflakeExternalVolumesExternalVolumesList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LikeInput`<sup>Optional</sup> <a name="LikeInput" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.likeInput"></a>

```go
func LikeInput() *string
```

- *Type:* *string

---

##### `WithDescribeInput`<sup>Optional</sup> <a name="WithDescribeInput" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.withDescribeInput"></a>

```go
func WithDescribeInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Like`<sup>Required</sup> <a name="Like" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.like"></a>

```go
func Like() *string
```

- *Type:* *string

---

##### `WithDescribe`<sup>Required</sup> <a name="WithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.withDescribe"></a>

```go
func WithDescribe() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumes.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeExternalVolumesConfig <a name="DataSnowflakeExternalVolumesConfig" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/datasnowflakeexternalvolumes"

&datasnowflakeexternalvolumes.DataSnowflakeExternalVolumesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	Like: *string,
	WithDescribe: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/data-sources/external_volumes#id DataSnowflakeExternalVolumes#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig.property.like">Like</a></code> | <code>*string</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig.property.withDescribe">WithDescribe</a></code> | <code>interface{}</code> | (Default: `true`) Runs DESC EXTERNAL VOLUME for each external volume returned by SHOW EXTERNAL VOLUMES. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/data-sources/external_volumes#id DataSnowflakeExternalVolumes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Like`<sup>Optional</sup> <a name="Like" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig.property.like"></a>

```go
Like *string
```

- *Type:* *string

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/data-sources/external_volumes#like DataSnowflakeExternalVolumes#like}

---

##### `WithDescribe`<sup>Optional</sup> <a name="WithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesConfig.property.withDescribe"></a>

```go
WithDescribe interface{}
```

- *Type:* interface{}

(Default: `true`) Runs DESC EXTERNAL VOLUME for each external volume returned by SHOW EXTERNAL VOLUMES.

The output of describe is saved to the describe_output field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/data-sources/external_volumes#with_describe DataSnowflakeExternalVolumes#with_describe}

---

### DataSnowflakeExternalVolumesExternalVolumes <a name="DataSnowflakeExternalVolumesExternalVolumes" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/datasnowflakeexternalvolumes"

&datasnowflakeexternalvolumes.DataSnowflakeExternalVolumesExternalVolumes {

}
```


### DataSnowflakeExternalVolumesExternalVolumesDescribeOutput <a name="DataSnowflakeExternalVolumesExternalVolumesDescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/datasnowflakeexternalvolumes"

&datasnowflakeexternalvolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutput {

}
```


### DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocations <a name="DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocations" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/datasnowflakeexternalvolumes"

&datasnowflakeexternalvolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocations {

}
```


### DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocation <a name="DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocation" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/datasnowflakeexternalvolumes"

&datasnowflakeexternalvolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocation {

}
```


### DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocation <a name="DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocation" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/datasnowflakeexternalvolumes"

&datasnowflakeexternalvolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocation {

}
```


### DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocation <a name="DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocation" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/datasnowflakeexternalvolumes"

&datasnowflakeexternalvolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocation {

}
```


### DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocation <a name="DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocation" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/datasnowflakeexternalvolumes"

&datasnowflakeexternalvolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocation {

}
```


### DataSnowflakeExternalVolumesExternalVolumesShowOutput <a name="DataSnowflakeExternalVolumesExternalVolumesShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/datasnowflakeexternalvolumes"

&datasnowflakeexternalvolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutput {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList <a name="DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/datasnowflakeexternalvolumes"

datasnowflakeexternalvolumes.NewDataSnowflakeExternalVolumesExternalVolumesDescribeOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.get"></a>

```go
func Get(index *f64) DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference <a name="DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/datasnowflakeexternalvolumes"

datasnowflakeexternalvolumes.NewDataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.property.active">Active</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.property.allowWrites">AllowWrites</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.property.storageLocations">StorageLocations</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList">DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutput">DataSnowflakeExternalVolumesExternalVolumesDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.property.active"></a>

```go
func Active() *string
```

- *Type:* *string

---

##### `AllowWrites`<sup>Required</sup> <a name="AllowWrites" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.property.allowWrites"></a>

```go
func AllowWrites() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `StorageLocations`<sup>Required</sup> <a name="StorageLocations" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.property.storageLocations"></a>

```go
func StorageLocations() DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList">DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeExternalVolumesExternalVolumesDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutput">DataSnowflakeExternalVolumesExternalVolumesDescribeOutput</a>

---


### DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList <a name="DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/datasnowflakeexternalvolumes"

datasnowflakeexternalvolumes.NewDataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.get"></a>

```go
func Get(index *f64) DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference <a name="DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/datasnowflakeexternalvolumes"

datasnowflakeexternalvolumes.NewDataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.property.azureConsentUrl">AzureConsentUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.property.azureMultiTenantAppName">AzureMultiTenantAppName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.property.azureTenantId">AzureTenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocation">DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AzureConsentUrl`<sup>Required</sup> <a name="AzureConsentUrl" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.property.azureConsentUrl"></a>

```go
func AzureConsentUrl() *string
```

- *Type:* *string

---

##### `AzureMultiTenantAppName`<sup>Required</sup> <a name="AzureMultiTenantAppName" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.property.azureMultiTenantAppName"></a>

```go
func AzureMultiTenantAppName() *string
```

- *Type:* *string

---

##### `AzureTenantId`<sup>Required</sup> <a name="AzureTenantId" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.property.azureTenantId"></a>

```go
func AzureTenantId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocation
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocation">DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocation</a>

---


### DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList <a name="DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/datasnowflakeexternalvolumes"

datasnowflakeexternalvolumes.NewDataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.get"></a>

```go
func Get(index *f64) DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference <a name="DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/datasnowflakeexternalvolumes"

datasnowflakeexternalvolumes.NewDataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.property.encryptionKmsKeyId">EncryptionKmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.property.storageGcpServiceAccount">StorageGcpServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocation">DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionKmsKeyId`<sup>Required</sup> <a name="EncryptionKmsKeyId" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.property.encryptionKmsKeyId"></a>

```go
func EncryptionKmsKeyId() *string
```

- *Type:* *string

---

##### `StorageGcpServiceAccount`<sup>Required</sup> <a name="StorageGcpServiceAccount" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.property.storageGcpServiceAccount"></a>

```go
func StorageGcpServiceAccount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocation
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocation">DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocation</a>

---


### DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList <a name="DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/datasnowflakeexternalvolumes"

datasnowflakeexternalvolumes.NewDataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.get"></a>

```go
func Get(index *f64) DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference <a name="DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/datasnowflakeexternalvolumes"

datasnowflakeexternalvolumes.NewDataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.azureStorageLocation">AzureStorageLocation</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList">DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.encryptionType">EncryptionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.gcsStorageLocation">GcsStorageLocation</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList">DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.s3CompatStorageLocation">S3CompatStorageLocation</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList">DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.s3StorageLocation">S3StorageLocation</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList">DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.storageAllowedLocations">StorageAllowedLocations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.storageBaseUrl">StorageBaseUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.storageProvider">StorageProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocations">DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AzureStorageLocation`<sup>Required</sup> <a name="AzureStorageLocation" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.azureStorageLocation"></a>

```go
func AzureStorageLocation() DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList">DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsAzureStorageLocationList</a>

---

##### `EncryptionType`<sup>Required</sup> <a name="EncryptionType" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.encryptionType"></a>

```go
func EncryptionType() *string
```

- *Type:* *string

---

##### `GcsStorageLocation`<sup>Required</sup> <a name="GcsStorageLocation" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.gcsStorageLocation"></a>

```go
func GcsStorageLocation() DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList">DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsGcsStorageLocationList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `S3CompatStorageLocation`<sup>Required</sup> <a name="S3CompatStorageLocation" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.s3CompatStorageLocation"></a>

```go
func S3CompatStorageLocation() DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList">DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList</a>

---

##### `S3StorageLocation`<sup>Required</sup> <a name="S3StorageLocation" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.s3StorageLocation"></a>

```go
func S3StorageLocation() DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList">DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList</a>

---

##### `StorageAllowedLocations`<sup>Required</sup> <a name="StorageAllowedLocations" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.storageAllowedLocations"></a>

```go
func StorageAllowedLocations() *[]*string
```

- *Type:* *[]*string

---

##### `StorageBaseUrl`<sup>Required</sup> <a name="StorageBaseUrl" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.storageBaseUrl"></a>

```go
func StorageBaseUrl() *string
```

- *Type:* *string

---

##### `StorageProvider`<sup>Required</sup> <a name="StorageProvider" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.storageProvider"></a>

```go
func StorageProvider() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocations
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocations">DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocations</a>

---


### DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList <a name="DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/datasnowflakeexternalvolumes"

datasnowflakeexternalvolumes.NewDataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.get"></a>

```go
func Get(index *f64) DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference <a name="DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/datasnowflakeexternalvolumes"

datasnowflakeexternalvolumes.NewDataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.property.awsAccessKeyId">AwsAccessKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.property.encryptionKmsKeyId">EncryptionKmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocation">DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsAccessKeyId`<sup>Required</sup> <a name="AwsAccessKeyId" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.property.awsAccessKeyId"></a>

```go
func AwsAccessKeyId() *string
```

- *Type:* *string

---

##### `EncryptionKmsKeyId`<sup>Required</sup> <a name="EncryptionKmsKeyId" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.property.encryptionKmsKeyId"></a>

```go
func EncryptionKmsKeyId() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocation
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocation">DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3CompatStorageLocation</a>

---


### DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList <a name="DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/datasnowflakeexternalvolumes"

datasnowflakeexternalvolumes.NewDataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.get"></a>

```go
func Get(index *f64) DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference <a name="DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/datasnowflakeexternalvolumes"

datasnowflakeexternalvolumes.NewDataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.encryptionKmsKeyId">EncryptionKmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.storageAwsAccessPointArn">StorageAwsAccessPointArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.storageAwsExternalId">StorageAwsExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.storageAwsIamUserArn">StorageAwsIamUserArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.storageAwsRoleArn">StorageAwsRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.usePrivatelinkEndpoint">UsePrivatelinkEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocation">DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionKmsKeyId`<sup>Required</sup> <a name="EncryptionKmsKeyId" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.encryptionKmsKeyId"></a>

```go
func EncryptionKmsKeyId() *string
```

- *Type:* *string

---

##### `StorageAwsAccessPointArn`<sup>Required</sup> <a name="StorageAwsAccessPointArn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.storageAwsAccessPointArn"></a>

```go
func StorageAwsAccessPointArn() *string
```

- *Type:* *string

---

##### `StorageAwsExternalId`<sup>Required</sup> <a name="StorageAwsExternalId" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.storageAwsExternalId"></a>

```go
func StorageAwsExternalId() *string
```

- *Type:* *string

---

##### `StorageAwsIamUserArn`<sup>Required</sup> <a name="StorageAwsIamUserArn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.storageAwsIamUserArn"></a>

```go
func StorageAwsIamUserArn() *string
```

- *Type:* *string

---

##### `StorageAwsRoleArn`<sup>Required</sup> <a name="StorageAwsRoleArn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.storageAwsRoleArn"></a>

```go
func StorageAwsRoleArn() *string
```

- *Type:* *string

---

##### `UsePrivatelinkEndpoint`<sup>Required</sup> <a name="UsePrivatelinkEndpoint" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.usePrivatelinkEndpoint"></a>

```go
func UsePrivatelinkEndpoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocation
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocation">DataSnowflakeExternalVolumesExternalVolumesDescribeOutputStorageLocationsS3StorageLocation</a>

---


### DataSnowflakeExternalVolumesExternalVolumesList <a name="DataSnowflakeExternalVolumesExternalVolumesList" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/datasnowflakeexternalvolumes"

datasnowflakeexternalvolumes.NewDataSnowflakeExternalVolumesExternalVolumesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataSnowflakeExternalVolumesExternalVolumesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.get"></a>

```go
func Get(index *f64) DataSnowflakeExternalVolumesExternalVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataSnowflakeExternalVolumesExternalVolumesOutputReference <a name="DataSnowflakeExternalVolumesExternalVolumesOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/datasnowflakeexternalvolumes"

datasnowflakeexternalvolumes.NewDataSnowflakeExternalVolumesExternalVolumesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataSnowflakeExternalVolumesExternalVolumesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList">DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList">DataSnowflakeExternalVolumesExternalVolumesShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumes">DataSnowflakeExternalVolumesExternalVolumes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.property.describeOutput"></a>

```go
func DescribeOutput() DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList">DataSnowflakeExternalVolumesExternalVolumesDescribeOutputList</a>

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.property.showOutput"></a>

```go
func ShowOutput() DataSnowflakeExternalVolumesExternalVolumesShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList">DataSnowflakeExternalVolumesExternalVolumesShowOutputList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeExternalVolumesExternalVolumes
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumes">DataSnowflakeExternalVolumesExternalVolumes</a>

---


### DataSnowflakeExternalVolumesExternalVolumesShowOutputList <a name="DataSnowflakeExternalVolumesExternalVolumesShowOutputList" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/datasnowflakeexternalvolumes"

datasnowflakeexternalvolumes.NewDataSnowflakeExternalVolumesExternalVolumesShowOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataSnowflakeExternalVolumesExternalVolumesShowOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.get"></a>

```go
func Get(index *f64) DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference <a name="DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/datasnowflakeexternalvolumes"

datasnowflakeexternalvolumes.NewDataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.property.allowWrites">AllowWrites</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutput">DataSnowflakeExternalVolumesExternalVolumesShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowWrites`<sup>Required</sup> <a name="AllowWrites" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.property.allowWrites"></a>

```go
func AllowWrites() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeExternalVolumesExternalVolumesShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalVolumes.DataSnowflakeExternalVolumesExternalVolumesShowOutput">DataSnowflakeExternalVolumesExternalVolumesShowOutput</a>

---



