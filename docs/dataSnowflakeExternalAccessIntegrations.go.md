# `dataSnowflakeExternalAccessIntegrations` Submodule <a name="`dataSnowflakeExternalAccessIntegrations` Submodule" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeExternalAccessIntegrations <a name="DataSnowflakeExternalAccessIntegrations" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/external_access_integrations snowflake_external_access_integrations}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeexternalaccessintegrations"

datasnowflakeexternalaccessintegrations.NewDataSnowflakeExternalAccessIntegrations(scope Construct, id *string, config DataSnowflakeExternalAccessIntegrationsConfig) DataSnowflakeExternalAccessIntegrations
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig">DataSnowflakeExternalAccessIntegrationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig">DataSnowflakeExternalAccessIntegrationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.resetLike">ResetLike</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.resetWithDescribe">ResetWithDescribe</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.resetId"></a>

```go
func ResetId()
```

##### `ResetLike` <a name="ResetLike" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.resetLike"></a>

```go
func ResetLike()
```

##### `ResetWithDescribe` <a name="ResetWithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.resetWithDescribe"></a>

```go
func ResetWithDescribe()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataSnowflakeExternalAccessIntegrations resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeexternalaccessintegrations"

datasnowflakeexternalaccessintegrations.DataSnowflakeExternalAccessIntegrations_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeexternalaccessintegrations"

datasnowflakeexternalaccessintegrations.DataSnowflakeExternalAccessIntegrations_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeexternalaccessintegrations"

datasnowflakeexternalaccessintegrations.DataSnowflakeExternalAccessIntegrations_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeexternalaccessintegrations"

datasnowflakeexternalaccessintegrations.DataSnowflakeExternalAccessIntegrations_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataSnowflakeExternalAccessIntegrations resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataSnowflakeExternalAccessIntegrations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataSnowflakeExternalAccessIntegrations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/external_access_integrations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataSnowflakeExternalAccessIntegrations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.externalAccessIntegrations">ExternalAccessIntegrations</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList">DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.likeInput">LikeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.withDescribeInput">WithDescribeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.like">Like</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.withDescribe">WithDescribe</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ExternalAccessIntegrations`<sup>Required</sup> <a name="ExternalAccessIntegrations" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.externalAccessIntegrations"></a>

```go
func ExternalAccessIntegrations() DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList">DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LikeInput`<sup>Optional</sup> <a name="LikeInput" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.likeInput"></a>

```go
func LikeInput() *string
```

- *Type:* *string

---

##### `WithDescribeInput`<sup>Optional</sup> <a name="WithDescribeInput" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.withDescribeInput"></a>

```go
func WithDescribeInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Like`<sup>Required</sup> <a name="Like" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.like"></a>

```go
func Like() *string
```

- *Type:* *string

---

##### `WithDescribe`<sup>Required</sup> <a name="WithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.withDescribe"></a>

```go
func WithDescribe() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrations.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeExternalAccessIntegrationsConfig <a name="DataSnowflakeExternalAccessIntegrationsConfig" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeexternalaccessintegrations"

&datasnowflakeexternalaccessintegrations.DataSnowflakeExternalAccessIntegrationsConfig {
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
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/external_access_integrations#id DataSnowflakeExternalAccessIntegrations#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.like">Like</a></code> | <code>*string</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.withDescribe">WithDescribe</a></code> | <code>interface{}</code> | (Default: `true`) Runs DESC EXTERNAL ACCESS INTEGRATION for each integration returned by SHOW EXTERNAL ACCESS INTEGRATIONS. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/external_access_integrations#id DataSnowflakeExternalAccessIntegrations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Like`<sup>Optional</sup> <a name="Like" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.like"></a>

```go
Like *string
```

- *Type:* *string

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/external_access_integrations#like DataSnowflakeExternalAccessIntegrations#like}

---

##### `WithDescribe`<sup>Optional</sup> <a name="WithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsConfig.property.withDescribe"></a>

```go
WithDescribe interface{}
```

- *Type:* interface{}

(Default: `true`) Runs DESC EXTERNAL ACCESS INTEGRATION for each integration returned by SHOW EXTERNAL ACCESS INTEGRATIONS.

The output of describe is saved to the describe_output field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/data-sources/external_access_integrations#with_describe DataSnowflakeExternalAccessIntegrations#with_describe}

---

### DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrations <a name="DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrations" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeexternalaccessintegrations"

&datasnowflakeexternalaccessintegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrations {

}
```


### DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutput <a name="DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeexternalaccessintegrations"

&datasnowflakeexternalaccessintegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutput {

}
```


### DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutput <a name="DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeexternalaccessintegrations"

&datasnowflakeexternalaccessintegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutput {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList <a name="DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeexternalaccessintegrations"

datasnowflakeexternalaccessintegrations.NewDataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.get"></a>

```go
func Get(index *f64) DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference <a name="DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeexternalaccessintegrations"

datasnowflakeexternalaccessintegrations.NewDataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.allowedApiAuthenticationIntegrations">AllowedApiAuthenticationIntegrations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.allowedAuthenticationSecrets">AllowedAuthenticationSecrets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.allowedNetworkRules">AllowedNetworkRules</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutput">DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedApiAuthenticationIntegrations`<sup>Required</sup> <a name="AllowedApiAuthenticationIntegrations" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.allowedApiAuthenticationIntegrations"></a>

```go
func AllowedApiAuthenticationIntegrations() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedAuthenticationSecrets`<sup>Required</sup> <a name="AllowedAuthenticationSecrets" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.allowedAuthenticationSecrets"></a>

```go
func AllowedAuthenticationSecrets() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedNetworkRules`<sup>Required</sup> <a name="AllowedNetworkRules" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.allowedNetworkRules"></a>

```go
func AllowedNetworkRules() *[]*string
```

- *Type:* *[]*string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutput">DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutput</a>

---


### DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList <a name="DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeexternalaccessintegrations"

datasnowflakeexternalaccessintegrations.NewDataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.get"></a>

```go
func Get(index *f64) DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference <a name="DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeexternalaccessintegrations"

datasnowflakeexternalaccessintegrations.NewDataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList">DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList">DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrations">DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.property.describeOutput"></a>

```go
func DescribeOutput() DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList">DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsDescribeOutputList</a>

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.property.showOutput"></a>

```go
func ShowOutput() DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList">DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrations
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrations">DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrations</a>

---


### DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList <a name="DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeexternalaccessintegrations"

datasnowflakeexternalaccessintegrations.NewDataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.get"></a>

```go
func Get(index *f64) DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference <a name="DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v18/datasnowflakeexternalaccessintegrations"

datasnowflakeexternalaccessintegrations.NewDataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutput">DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeExternalAccessIntegrations.DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutput">DataSnowflakeExternalAccessIntegrationsExternalAccessIntegrationsShowOutput</a>

---



