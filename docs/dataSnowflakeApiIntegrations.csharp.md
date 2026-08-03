# `dataSnowflakeApiIntegrations` Submodule <a name="`dataSnowflakeApiIntegrations` Submodule" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeApiIntegrations <a name="DataSnowflakeApiIntegrations" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/api_integrations snowflake_api_integrations}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeApiIntegrations(Construct Scope, string Id, DataSnowflakeApiIntegrationsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig">DataSnowflakeApiIntegrationsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig">DataSnowflakeApiIntegrationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.resetLike">ResetLike</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.resetWithDescribe">ResetWithDescribe</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLike` <a name="ResetLike" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.resetLike"></a>

```csharp
private void ResetLike()
```

##### `ResetWithDescribe` <a name="ResetWithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.resetWithDescribe"></a>

```csharp
private void ResetWithDescribe()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataSnowflakeApiIntegrations resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

DataSnowflakeApiIntegrations.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

DataSnowflakeApiIntegrations.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

DataSnowflakeApiIntegrations.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

DataSnowflakeApiIntegrations.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataSnowflakeApiIntegrations resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSnowflakeApiIntegrations to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSnowflakeApiIntegrations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/api_integrations#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataSnowflakeApiIntegrations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.apiIntegrations">ApiIntegrations</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList">DataSnowflakeApiIntegrationsApiIntegrationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.likeInput">LikeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.withDescribeInput">WithDescribeInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.like">Like</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.withDescribe">WithDescribe</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ApiIntegrations`<sup>Required</sup> <a name="ApiIntegrations" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.apiIntegrations"></a>

```csharp
public DataSnowflakeApiIntegrationsApiIntegrationsList ApiIntegrations { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList">DataSnowflakeApiIntegrationsApiIntegrationsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LikeInput`<sup>Optional</sup> <a name="LikeInput" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.likeInput"></a>

```csharp
public string LikeInput { get; }
```

- *Type:* string

---

##### `WithDescribeInput`<sup>Optional</sup> <a name="WithDescribeInput" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.withDescribeInput"></a>

```csharp
public bool|IResolvable WithDescribeInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Like`<sup>Required</sup> <a name="Like" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.like"></a>

```csharp
public string Like { get; }
```

- *Type:* string

---

##### `WithDescribe`<sup>Required</sup> <a name="WithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.withDescribe"></a>

```csharp
public bool|IResolvable WithDescribe { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeApiIntegrationsApiIntegrations <a name="DataSnowflakeApiIntegrationsApiIntegrations" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeApiIntegrationsApiIntegrations {

};
```


### DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutput <a name="DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutput {

};
```


### DataSnowflakeApiIntegrationsApiIntegrationsShowOutput <a name="DataSnowflakeApiIntegrationsApiIntegrationsShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeApiIntegrationsApiIntegrationsShowOutput {

};
```


### DataSnowflakeApiIntegrationsConfig <a name="DataSnowflakeApiIntegrationsConfig" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeApiIntegrationsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Id = null,
    string Like = null,
    bool|IResolvable WithDescribe = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/api_integrations#id DataSnowflakeApiIntegrations#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.like">Like</a></code> | <code>string</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.withDescribe">WithDescribe</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | (Default: `true`) Runs DESC API INTEGRATION for each integration returned by SHOW API INTEGRATIONS. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/api_integrations#id DataSnowflakeApiIntegrations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Like`<sup>Optional</sup> <a name="Like" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.like"></a>

```csharp
public string Like { get; set; }
```

- *Type:* string

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/api_integrations#like DataSnowflakeApiIntegrations#like}

---

##### `WithDescribe`<sup>Optional</sup> <a name="WithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.withDescribe"></a>

```csharp
public bool|IResolvable WithDescribe { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

(Default: `true`) Runs DESC API INTEGRATION for each integration returned by SHOW API INTEGRATIONS.

The output of describe is saved to the describe_output field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/api_integrations#with_describe DataSnowflakeApiIntegrations#with_describe}

---

## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList <a name="DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.get"></a>

```csharp
private DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference <a name="DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.allowedAuthenticationSecrets">AllowedAuthenticationSecrets</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.allowedPrefixes">AllowedPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.apiAwsExternalId">ApiAwsExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.apiAwsIamUserArn">ApiAwsIamUserArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.apiAwsRoleArn">ApiAwsRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.apiKey">ApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.apiProvider">ApiProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.azureAdApplicationId">AzureAdApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.azureConsentUrl">AzureConsentUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.azureMultiTenantAppName">AzureMultiTenantAppName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.azureTenantId">AzureTenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.blockedPrefixes">BlockedPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.googleApiServiceAccount">GoogleApiServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.googleAudience">GoogleAudience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthAccessTokenValidity">OauthAccessTokenValidity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthAllowedScopes">OauthAllowedScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthAssertionIssuer">OauthAssertionIssuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthAuthorizationEndpoint">OauthAuthorizationEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthClientAuthMethod">OauthClientAuthMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthClientId">OauthClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthGrant">OauthGrant</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthRefreshTokenValidity">OauthRefreshTokenValidity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthResourceUrl">OauthResourceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthTokenEndpoint">OauthTokenEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthUsername">OauthUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.tlsTrustedCertificates">TlsTrustedCertificates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.usePrivatelinkEndpoint">UsePrivatelinkEndpoint</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.userAuthType">UserAuthType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutput">DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedAuthenticationSecrets`<sup>Required</sup> <a name="AllowedAuthenticationSecrets" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.allowedAuthenticationSecrets"></a>

```csharp
public string AllowedAuthenticationSecrets { get; }
```

- *Type:* string

---

##### `AllowedPrefixes`<sup>Required</sup> <a name="AllowedPrefixes" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.allowedPrefixes"></a>

```csharp
public string[] AllowedPrefixes { get; }
```

- *Type:* string[]

---

##### `ApiAwsExternalId`<sup>Required</sup> <a name="ApiAwsExternalId" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.apiAwsExternalId"></a>

```csharp
public string ApiAwsExternalId { get; }
```

- *Type:* string

---

##### `ApiAwsIamUserArn`<sup>Required</sup> <a name="ApiAwsIamUserArn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.apiAwsIamUserArn"></a>

```csharp
public string ApiAwsIamUserArn { get; }
```

- *Type:* string

---

##### `ApiAwsRoleArn`<sup>Required</sup> <a name="ApiAwsRoleArn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.apiAwsRoleArn"></a>

```csharp
public string ApiAwsRoleArn { get; }
```

- *Type:* string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.apiKey"></a>

```csharp
public string ApiKey { get; }
```

- *Type:* string

---

##### `ApiProvider`<sup>Required</sup> <a name="ApiProvider" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.apiProvider"></a>

```csharp
public string ApiProvider { get; }
```

- *Type:* string

---

##### `AzureAdApplicationId`<sup>Required</sup> <a name="AzureAdApplicationId" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.azureAdApplicationId"></a>

```csharp
public string AzureAdApplicationId { get; }
```

- *Type:* string

---

##### `AzureConsentUrl`<sup>Required</sup> <a name="AzureConsentUrl" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.azureConsentUrl"></a>

```csharp
public string AzureConsentUrl { get; }
```

- *Type:* string

---

##### `AzureMultiTenantAppName`<sup>Required</sup> <a name="AzureMultiTenantAppName" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.azureMultiTenantAppName"></a>

```csharp
public string AzureMultiTenantAppName { get; }
```

- *Type:* string

---

##### `AzureTenantId`<sup>Required</sup> <a name="AzureTenantId" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.azureTenantId"></a>

```csharp
public string AzureTenantId { get; }
```

- *Type:* string

---

##### `BlockedPrefixes`<sup>Required</sup> <a name="BlockedPrefixes" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.blockedPrefixes"></a>

```csharp
public string[] BlockedPrefixes { get; }
```

- *Type:* string[]

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `GoogleApiServiceAccount`<sup>Required</sup> <a name="GoogleApiServiceAccount" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.googleApiServiceAccount"></a>

```csharp
public string GoogleApiServiceAccount { get; }
```

- *Type:* string

---

##### `GoogleAudience`<sup>Required</sup> <a name="GoogleAudience" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.googleAudience"></a>

```csharp
public string GoogleAudience { get; }
```

- *Type:* string

---

##### `OauthAccessTokenValidity`<sup>Required</sup> <a name="OauthAccessTokenValidity" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthAccessTokenValidity"></a>

```csharp
public double OauthAccessTokenValidity { get; }
```

- *Type:* double

---

##### `OauthAllowedScopes`<sup>Required</sup> <a name="OauthAllowedScopes" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthAllowedScopes"></a>

```csharp
public string[] OauthAllowedScopes { get; }
```

- *Type:* string[]

---

##### `OauthAssertionIssuer`<sup>Required</sup> <a name="OauthAssertionIssuer" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthAssertionIssuer"></a>

```csharp
public string OauthAssertionIssuer { get; }
```

- *Type:* string

---

##### `OauthAuthorizationEndpoint`<sup>Required</sup> <a name="OauthAuthorizationEndpoint" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthAuthorizationEndpoint"></a>

```csharp
public string OauthAuthorizationEndpoint { get; }
```

- *Type:* string

---

##### `OauthClientAuthMethod`<sup>Required</sup> <a name="OauthClientAuthMethod" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthClientAuthMethod"></a>

```csharp
public string OauthClientAuthMethod { get; }
```

- *Type:* string

---

##### `OauthClientId`<sup>Required</sup> <a name="OauthClientId" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthClientId"></a>

```csharp
public string OauthClientId { get; }
```

- *Type:* string

---

##### `OauthGrant`<sup>Required</sup> <a name="OauthGrant" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthGrant"></a>

```csharp
public string OauthGrant { get; }
```

- *Type:* string

---

##### `OauthRefreshTokenValidity`<sup>Required</sup> <a name="OauthRefreshTokenValidity" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthRefreshTokenValidity"></a>

```csharp
public double OauthRefreshTokenValidity { get; }
```

- *Type:* double

---

##### `OauthResourceUrl`<sup>Required</sup> <a name="OauthResourceUrl" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthResourceUrl"></a>

```csharp
public string OauthResourceUrl { get; }
```

- *Type:* string

---

##### `OauthTokenEndpoint`<sup>Required</sup> <a name="OauthTokenEndpoint" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthTokenEndpoint"></a>

```csharp
public string OauthTokenEndpoint { get; }
```

- *Type:* string

---

##### `OauthUsername`<sup>Required</sup> <a name="OauthUsername" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthUsername"></a>

```csharp
public string OauthUsername { get; }
```

- *Type:* string

---

##### `TlsTrustedCertificates`<sup>Required</sup> <a name="TlsTrustedCertificates" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.tlsTrustedCertificates"></a>

```csharp
public string[] TlsTrustedCertificates { get; }
```

- *Type:* string[]

---

##### `UsePrivatelinkEndpoint`<sup>Required</sup> <a name="UsePrivatelinkEndpoint" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.usePrivatelinkEndpoint"></a>

```csharp
public IResolvable UsePrivatelinkEndpoint { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `UserAuthType`<sup>Required</sup> <a name="UserAuthType" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.userAuthType"></a>

```csharp
public string UserAuthType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutput">DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutput</a>

---


### DataSnowflakeApiIntegrationsApiIntegrationsList <a name="DataSnowflakeApiIntegrationsApiIntegrationsList" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeApiIntegrationsApiIntegrationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.get"></a>

```csharp
private DataSnowflakeApiIntegrationsApiIntegrationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeApiIntegrationsApiIntegrationsOutputReference <a name="DataSnowflakeApiIntegrationsApiIntegrationsOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeApiIntegrationsApiIntegrationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList">DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList">DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrations">DataSnowflakeApiIntegrationsApiIntegrations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.property.describeOutput"></a>

```csharp
public DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList DescribeOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList">DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList</a>

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.property.showOutput"></a>

```csharp
public DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList ShowOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList">DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeApiIntegrationsApiIntegrations InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrations">DataSnowflakeApiIntegrationsApiIntegrations</a>

---


### DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList <a name="DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.get"></a>

```csharp
private DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference <a name="DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.apiType">ApiType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutput">DataSnowflakeApiIntegrationsApiIntegrationsShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiType`<sup>Required</sup> <a name="ApiType" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.apiType"></a>

```csharp
public string ApiType { get; }
```

- *Type:* string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.internalValue"></a>

```csharp
public DataSnowflakeApiIntegrationsApiIntegrationsShowOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutput">DataSnowflakeApiIntegrationsApiIntegrationsShowOutput</a>

---



