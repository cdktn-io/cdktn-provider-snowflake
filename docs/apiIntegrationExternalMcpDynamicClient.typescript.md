# `apiIntegrationExternalMcpDynamicClient` Submodule <a name="`apiIntegrationExternalMcpDynamicClient` Submodule" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiIntegrationExternalMcpDynamicClient <a name="ApiIntegrationExternalMcpDynamicClient" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client snowflake_api_integration_external_mcp_dynamic_client}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer"></a>

```typescript
import { apiIntegrationExternalMcpDynamicClient } from '@cdktn/provider-snowflake'

new apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient(scope: Construct, id: string, config: ApiIntegrationExternalMcpDynamicClientConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig">ApiIntegrationExternalMcpDynamicClientConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig">ApiIntegrationExternalMcpDynamicClientConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.resetApiBlockedPrefixes">resetApiBlockedPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.putTimeouts"></a>

```typescript
public putTimeouts(value: ApiIntegrationExternalMcpDynamicClientTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts">ApiIntegrationExternalMcpDynamicClientTimeouts</a>

---

##### `resetApiBlockedPrefixes` <a name="resetApiBlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.resetApiBlockedPrefixes"></a>

```typescript
public resetApiBlockedPrefixes(): void
```

##### `resetComment` <a name="resetComment" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApiIntegrationExternalMcpDynamicClient resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.isConstruct"></a>

```typescript
import { apiIntegrationExternalMcpDynamicClient } from '@cdktn/provider-snowflake'

apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.isTerraformElement"></a>

```typescript
import { apiIntegrationExternalMcpDynamicClient } from '@cdktn/provider-snowflake'

apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.isTerraformResource"></a>

```typescript
import { apiIntegrationExternalMcpDynamicClient } from '@cdktn/provider-snowflake'

apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.generateConfigForImport"></a>

```typescript
import { apiIntegrationExternalMcpDynamicClient } from '@cdktn/provider-snowflake'

apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ApiIntegrationExternalMcpDynamicClient resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApiIntegrationExternalMcpDynamicClient to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApiIntegrationExternalMcpDynamicClient that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApiIntegrationExternalMcpDynamicClient to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList">ApiIntegrationExternalMcpDynamicClientDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList">ApiIntegrationExternalMcpDynamicClientShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference">ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.apiAllowedPrefixesInput">apiAllowedPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.apiBlockedPrefixesInput">apiBlockedPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.oauthResourceUrlInput">oauthResourceUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts">ApiIntegrationExternalMcpDynamicClientTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.apiAllowedPrefixes">apiAllowedPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.apiBlockedPrefixes">apiBlockedPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.oauthResourceUrl">oauthResourceUrl</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.describeOutput"></a>

```typescript
public readonly describeOutput: ApiIntegrationExternalMcpDynamicClientDescribeOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList">ApiIntegrationExternalMcpDynamicClientDescribeOutputList</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.fullyQualifiedName"></a>

```typescript
public readonly fullyQualifiedName: string;
```

- *Type:* string

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.showOutput"></a>

```typescript
public readonly showOutput: ApiIntegrationExternalMcpDynamicClientShowOutputList;
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList">ApiIntegrationExternalMcpDynamicClientShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.timeouts"></a>

```typescript
public readonly timeouts: ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference">ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference</a>

---

##### `apiAllowedPrefixesInput`<sup>Optional</sup> <a name="apiAllowedPrefixesInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.apiAllowedPrefixesInput"></a>

```typescript
public readonly apiAllowedPrefixesInput: string[];
```

- *Type:* string[]

---

##### `apiBlockedPrefixesInput`<sup>Optional</sup> <a name="apiBlockedPrefixesInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.apiBlockedPrefixesInput"></a>

```typescript
public readonly apiBlockedPrefixesInput: string[];
```

- *Type:* string[]

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `oauthResourceUrlInput`<sup>Optional</sup> <a name="oauthResourceUrlInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.oauthResourceUrlInput"></a>

```typescript
public readonly oauthResourceUrlInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ApiIntegrationExternalMcpDynamicClientTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts">ApiIntegrationExternalMcpDynamicClientTimeouts</a>

---

##### `apiAllowedPrefixes`<sup>Required</sup> <a name="apiAllowedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.apiAllowedPrefixes"></a>

```typescript
public readonly apiAllowedPrefixes: string[];
```

- *Type:* string[]

---

##### `apiBlockedPrefixes`<sup>Required</sup> <a name="apiBlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.apiBlockedPrefixes"></a>

```typescript
public readonly apiBlockedPrefixes: string[];
```

- *Type:* string[]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `oauthResourceUrl`<sup>Required</sup> <a name="oauthResourceUrl" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.oauthResourceUrl"></a>

```typescript
public readonly oauthResourceUrl: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiIntegrationExternalMcpDynamicClientConfig <a name="ApiIntegrationExternalMcpDynamicClientConfig" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.Initializer"></a>

```typescript
import { apiIntegrationExternalMcpDynamicClient } from '@cdktn/provider-snowflake'

const apiIntegrationExternalMcpDynamicClientConfig: apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.apiAllowedPrefixes">apiAllowedPrefixes</a></code> | <code>string[]</code> | Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether this API integration is enabled or disabled. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.name">name</a></code> | <code>string</code> | Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.oauthResourceUrl">oauthResourceUrl</a></code> | <code>string</code> | The URL of the OAuth2 protected resource server. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.apiBlockedPrefixes">apiBlockedPrefixes</a></code> | <code>string[]</code> | Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.comment">comment</a></code> | <code>string</code> | Specifies a comment for the integration. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#id ApiIntegrationExternalMcpDynamicClient#id}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts">ApiIntegrationExternalMcpDynamicClientTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `apiAllowedPrefixes`<sup>Required</sup> <a name="apiAllowedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.apiAllowedPrefixes"></a>

```typescript
public readonly apiAllowedPrefixes: string[];
```

- *Type:* string[]

Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#api_allowed_prefixes ApiIntegrationExternalMcpDynamicClient#api_allowed_prefixes}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether this API integration is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#enabled ApiIntegrationExternalMcpDynamicClient#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#name ApiIntegrationExternalMcpDynamicClient#name}

---

##### `oauthResourceUrl`<sup>Required</sup> <a name="oauthResourceUrl" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.oauthResourceUrl"></a>

```typescript
public readonly oauthResourceUrl: string;
```

- *Type:* string

The URL of the OAuth2 protected resource server.

This URL is used by Snowflake to discover OAuth2 provider endpoints via RFC 8414 server metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#oauth_resource_url ApiIntegrationExternalMcpDynamicClient#oauth_resource_url}

---

##### `apiBlockedPrefixes`<sup>Optional</sup> <a name="apiBlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.apiBlockedPrefixes"></a>

```typescript
public readonly apiBlockedPrefixes: string[];
```

- *Type:* string[]

Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#api_blocked_prefixes ApiIntegrationExternalMcpDynamicClient#api_blocked_prefixes}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Specifies a comment for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#comment ApiIntegrationExternalMcpDynamicClient#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#id ApiIntegrationExternalMcpDynamicClient#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApiIntegrationExternalMcpDynamicClientTimeouts;
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts">ApiIntegrationExternalMcpDynamicClientTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#timeouts ApiIntegrationExternalMcpDynamicClient#timeouts}

---

### ApiIntegrationExternalMcpDynamicClientDescribeOutput <a name="ApiIntegrationExternalMcpDynamicClientDescribeOutput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutput.Initializer"></a>

```typescript
import { apiIntegrationExternalMcpDynamicClient } from '@cdktn/provider-snowflake'

const apiIntegrationExternalMcpDynamicClientDescribeOutput: apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutput = { ... }
```


### ApiIntegrationExternalMcpDynamicClientShowOutput <a name="ApiIntegrationExternalMcpDynamicClientShowOutput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutput.Initializer"></a>

```typescript
import { apiIntegrationExternalMcpDynamicClient } from '@cdktn/provider-snowflake'

const apiIntegrationExternalMcpDynamicClientShowOutput: apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutput = { ... }
```


### ApiIntegrationExternalMcpDynamicClientTimeouts <a name="ApiIntegrationExternalMcpDynamicClientTimeouts" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts.Initializer"></a>

```typescript
import { apiIntegrationExternalMcpDynamicClient } from '@cdktn/provider-snowflake'

const apiIntegrationExternalMcpDynamicClientTimeouts: apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#create ApiIntegrationExternalMcpDynamicClient#create}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#delete ApiIntegrationExternalMcpDynamicClient#delete}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#read ApiIntegrationExternalMcpDynamicClient#read}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#update ApiIntegrationExternalMcpDynamicClient#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#create ApiIntegrationExternalMcpDynamicClient#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#delete ApiIntegrationExternalMcpDynamicClient#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#read ApiIntegrationExternalMcpDynamicClient#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#update ApiIntegrationExternalMcpDynamicClient#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiIntegrationExternalMcpDynamicClientDescribeOutputList <a name="ApiIntegrationExternalMcpDynamicClientDescribeOutputList" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.Initializer"></a>

```typescript
import { apiIntegrationExternalMcpDynamicClient } from '@cdktn/provider-snowflake'

new apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.get"></a>

```typescript
public get(index: number): ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference <a name="ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.Initializer"></a>

```typescript
import { apiIntegrationExternalMcpDynamicClient } from '@cdktn/provider-snowflake'

new apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.allowedPrefixes">allowedPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.apiProvider">apiProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.blockedPrefixes">blockedPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.oauthResourceUrl">oauthResourceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.userAuthType">userAuthType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutput">ApiIntegrationExternalMcpDynamicClientDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedPrefixes`<sup>Required</sup> <a name="allowedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.allowedPrefixes"></a>

```typescript
public readonly allowedPrefixes: string[];
```

- *Type:* string[]

---

##### `apiProvider`<sup>Required</sup> <a name="apiProvider" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.apiProvider"></a>

```typescript
public readonly apiProvider: string;
```

- *Type:* string

---

##### `blockedPrefixes`<sup>Required</sup> <a name="blockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.blockedPrefixes"></a>

```typescript
public readonly blockedPrefixes: string[];
```

- *Type:* string[]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `oauthResourceUrl`<sup>Required</sup> <a name="oauthResourceUrl" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.oauthResourceUrl"></a>

```typescript
public readonly oauthResourceUrl: string;
```

- *Type:* string

---

##### `userAuthType`<sup>Required</sup> <a name="userAuthType" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.userAuthType"></a>

```typescript
public readonly userAuthType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiIntegrationExternalMcpDynamicClientDescribeOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutput">ApiIntegrationExternalMcpDynamicClientDescribeOutput</a>

---


### ApiIntegrationExternalMcpDynamicClientShowOutputList <a name="ApiIntegrationExternalMcpDynamicClientShowOutputList" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.Initializer"></a>

```typescript
import { apiIntegrationExternalMcpDynamicClient } from '@cdktn/provider-snowflake'

new apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.get"></a>

```typescript
public get(index: number): ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference <a name="ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.Initializer"></a>

```typescript
import { apiIntegrationExternalMcpDynamicClient } from '@cdktn/provider-snowflake'

new apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.apiType">apiType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutput">ApiIntegrationExternalMcpDynamicClientShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiType`<sup>Required</sup> <a name="apiType" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.apiType"></a>

```typescript
public readonly apiType: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiIntegrationExternalMcpDynamicClientShowOutput;
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutput">ApiIntegrationExternalMcpDynamicClientShowOutput</a>

---


### ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference <a name="ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.Initializer"></a>

```typescript
import { apiIntegrationExternalMcpDynamicClient } from '@cdktn/provider-snowflake'

new apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts">ApiIntegrationExternalMcpDynamicClientTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiIntegrationExternalMcpDynamicClientTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts">ApiIntegrationExternalMcpDynamicClientTimeouts</a>

---



